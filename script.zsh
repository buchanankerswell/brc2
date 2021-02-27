#!/bin/zsh

# Load colors
autoload colors; colors;

# Get image fnames, sorted by height
echo $fg[green] "Fetching image paths"
fname=("${(@f)$(ls -t assets/images/fulls/)}")

echo $fg[green] "Images:"
printf '%s\n' ${fname}

# Remove poor quality photos (<2MP)
echo "Removing poor quality photos (<2.5MP)"
for (( i = 1; i <= $#fname; i++ )) do
  if [[ $(identify -format "%w" assets/images/fulls/$fname[i]) -lt 2500 ]];
    then echo $fg[red] "${fname[i]} is less than 2MP ... removing";
    rm assets/images/fulls/${fname[i]};
  fi
done

# Get new image fnames
fkeep=("${(@f)$(ls -t assets/images/fulls/)}")

echo $fg[magenta] "Kept images:"
printf '%s\n' ${fkeep}

# Find minimum width and height of thumbnails
echo $fg[green] "Finding minimum width and height"
fheight=("${(@f)$(identify -ping -format '%h %f\n' assets/images/fulls/*.jpg | sort -rn | awk '{print $1 }')}")
fwidth=("${(@f)$(identify -ping -format '%w %f\n' assets/images/fulls/*.jpg | sort -rn | awk '{print $1 }')}")
minheight=$(printf '%s\n' "${fheight[@]}" | sort -g -k1,1 | tail -1)
minwidth=$(printf '%s\n' "${fwidth[@]}" | sort -g -k1,1 | tail -1)

echo $fg[magenta] "Min dimensions: ${minwidth}x${minheight}"

# Resize thumbs
echo $fg[blue] "Resizing thumbnails to ${minheight}x${minheight}"
for (( i = 1; i <= $#fkeep; i++ )) do
  echo "resizing ${fkeep[i]}" &&
  convert assets/images/fulls/${fkeep[i]} -resize ${minheight}x${minheight} -background black -gravity center -extent ${minheight}x${minheight} assets/images/thumbs/${fkeep[i]%.*}.jpg;
done

# Resize thumbs
echo $fg[blue] "Resizing thumbnails to 10%"
for (( i = 1; i <= $#fkeep; i++ )) do
  echo "resizing ${fkeep[i]}" &&
  convert assets/images/thumbs/${fkeep[i]} -resize 10% assets/images/thumbs/${fkeep[i]%.*}_thumb.jpg;
done

# Clean up directory
rename -f 's/_thumb//' *thumb.jpg

# Write md for gallery
echo $fg[blue] "Writing collection markdown pages"
for (( i = 1; i <= $#fkeep; i++ )) do (
  echo $fg[green] "writing yaml for: ${fkeep[i]}"
  echo "---
title:
caption:
path-full: 'assets/images/fulls/${fkeep[i]}'
path-thumb: 'assets/images/thumbs/${fkeep[i]}'
---" > _images/${fkeep[i]}.md
)
done
echo $fg[magenta] "Done"
