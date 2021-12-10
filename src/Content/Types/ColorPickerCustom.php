<?php

namespace SevenGroupFrance\SuluCustomToggleBundle\Content\Types;

use Sulu\Component\Content\SimpleContentType;

class CustomToggle extends SimpleContentType
{
    public function __construct()
    {
        parent::__construct('custom_toggle');
    }
}
