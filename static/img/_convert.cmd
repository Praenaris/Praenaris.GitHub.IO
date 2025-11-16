::@echo off
chcp 65001

::magick "input.png" -resize "80%%" "output.webp"

::Convert FROM PNG TO WEBP
magick mogrify -format webp -quality 35 *.png

::pause
exit