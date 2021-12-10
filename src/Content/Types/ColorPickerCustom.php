<?php

namespace SevenGroupFrance\SuluColorPickerBundle\Content\Types;

use Sulu\Component\Content\SimpleContentType;

class ColorPickerCustom extends SimpleContentType
{
    public function __construct()
    {
        parent::__construct("color_picker_custom");
    }
}
