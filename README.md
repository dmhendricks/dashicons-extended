[![Author](https://img.shields.io/badge/author-Daniel%20M.%20Hendricks-lightgrey.svg?colorB=9900cc )](https://www.danhendricks.com)
[![Latest Release](https://img.shields.io/github/release/dmhendricks/dashicons-extended.svg)](https://github.com/dmhendricks/dashicons-extended/releases)
[![GitHub License](https://img.shields.io/badge/license-GPLv3-yellow.svg)](https://raw.githubusercontent.com/dmhendricks/dashicons-extended/master/LICENSE)
[![CloudVerve, LLC](https://img.shields.io/badge/style-CloudVerve-green.svg?style=flat&label=get%20hosted&colorB=AE2A21)](https://2lab.net)
[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://paypal.me/danielhendricks)
[![Twitter](https://img.shields.io/twitter/url/https/github.com/dmhendricks/dashicons-extended.svg?style=social)](https://twitter.com/danielhendricks)

# Dashicons Extended

This is a simple **_experiment_** to be a drop-in replacement that extends the [dashicons](https://developer.wordpress.org/resource/dashicons/) library used in WordPress. **I have only added a handful of icons** until I get the process straightened out and tested.

**Note:** It is not compatible with [Gutenberg](https://github.com/WordPress/gutenberg), which embeds SVGs inline.

### Naming Conventions

I prefixed the CSS classes with `dashicons` in order to preserve compatibility with various WordPress implementations. For example, some frameworks/addons/functions simply ask for for an icon name without the prefix, such as `carrot` rather than `dashicons-carrot` - this is why I used the same prefix.

### License

To keep things simple and compatible, I chose the [GNU GPLv3](https://opensource.org/licenses/GPL-3.0) license since the current [dashicons library](https://github.com/WordPress/dashicons/) on GitHub is licensed as such.

## TODO

- Fix dimensions of new icons, replace misfits
- Standardize naming conventions
- Add many more icons to the set
- Finish demo page with filter search
- Figure out if options are available for Gutenberg
- Add to package manager(s) and CDN
- Improve documentation/examples
- Consider Composer autoloader for plugins and themes

## Example Usage

If you want to try it out, download the `dashicons-extended.css` and `font` directories and place them in a public folder on your web site. Then, enqueue the script in the WP Admin head, and optionally, the front end as desired.

```
add_action( 'admin_enqueue_scripts', function() {
   wp_enqueue_style( 'dashicons-extended', 'link/to/dashicons-extended.css' );
});
```

You can then reference the icons as you normally would for standard [dashicons](https://developer.wordpress.org/resource/dashicons/) in WordPress.

**Displaying a Single Icon**

```
<i class="dashicons dashicons-ext-geek"></i>
```

**Custom Post Type Menu Icon**

```
function my_custom_post_type() {
   $args = array(
      'menu_position' => 20,
      'menu_icon' => 'dashicons-ext-flame'
	);

    register_post_type( 'recipe', $args );
}

add_action( 'init', 'my_custom_post_type' );
```

Please [report bugs](https://github.com/dmhendricks/dashicons-extended/issues) or conflicts that you discover.


## Legal

All icons used in this set were either (to the best of my understanding and diligence) licensed royalty-free, were used from an existing GPL-compatible set and/or used with original author permission. Icons requiring attribution noted below.

### Attribution

- The original [Dashicons set](https://github.com/WordPress/dashicons/) provided under [GPLv3 license](https://github.com/WordPress/dashicons/blob/master/gpl.txt)
- Most addon icons provided by [The Noun Project](https://thenounproject.com/) and [Flaticon](https://www.flaticon.com/) (with paid subscriptions)
- Some icons provided under [CC BY 3.0 license]() from [Icons8 LLC](https://icons8.com/). All were _resized_ to conform to the [dashicons Illustrator template](https://github.com/WordPress/dashicons/blob/master/sources/dashicons-icon-template.ai).
   - [Android icon](https://www.flaticon.com/free-icon/android-logo_61120) by [Google](https://www.flaticon.com/authors/google)
