<?php

namespace sevenGroupFrance\suluColorPickerBundle\Content\Types;

use Sulu\Component\Content\SimpleContentType;

class ColorPickerCustom extends SimpleContentType
{
    public function __construct()
    {
        parent::__construct("color_picker_custom");
    }
}
