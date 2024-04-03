// ==UserScript==
// @name         Flocus Tweaks
// @namespace    http://tampermonkey.net/
// @version      2024-04-03
// @description  Take over the world!
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js
// @require      https://raw.githubusercontent.com/torin-stephen/FlocusPlayer/main/toast/toast.js
// @require      https://kit.fontawesome.com/f2cd1a0920.js
// @resource     REMOTE_CSS https://raw.githubusercontent.com/torin-stephen/FlocusPlayer/main/toast/toast.css
// @author       TKMSMC
// @match        https://app.flocus.com/
// @icon         data:image/png;base64,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
// @grant        GM_getResourceText
// @grant        GM_addStyle
// ==/UserScript==

// Font Jura
// Color #222 #8D8
// Toast settings: https://codeshack.io/elegant-toast-notifications-javascript/

(function() {
    'use strict';
    var $ = window.jQuery;

    ////////////////////////////////
    // TOAST SETTINGS
    ////////////////////////////////

    // Establish Toast settings
    const toasts = new Toasts({
        offsetX: 20, // 20px
        offsetY: 20, // 20px
        gap: 20, // The gap size in pixels between toasts
        width: 300, // 300px
        timing: 'ease', // See list of available CSS transition timings
        duration: '.5s', // Transition duration
        dimOld: true, // Dim old notifications while the newest notification stays highlighted
        position: 'top-right' // top-left | top-center | top-right | bottom-left | bottom-center | bottom-right
    });

    // Add toast and fa css to the page
    const toastCss = GM_getResourceText("REMOTE_CSS");
    GM_addStyle(toastCss);

    // Playlist id separator
    const getPlaylistID = (url) => {
        let operatorRemoved = url.split("?")[0];
        let id = operatorRemoved.substring(operatorRemoved.lastIndexOf('/') + 1);
        return id;
    }

    $(window).load(function(){

        // Run toast to show loaded
        toasts.push({
            title: 'Flocus Tweaks Loaded',
            content: 'Flocus Tweaks by TKMSMC',
            style: 'dark',
            dismissAfter: '2.5s'
        });

        ////////////////////////////////
        // VISUAL SETTINGS
        ////////////////////////////////

        // Replace logo with better one
        $('.logo').attr('src', 'https://raw.githubusercontent.com/torin-stephen/FlocusPlayer/main/logo.png');

        // Fix the strange visual choices
        $('.offcanvas-content').removeClass();

        // Remove ads for plus
        $('plus-badge').remove()
        $('.upgrade-button').remove()

        // When the dash is changed, remove ads for plus
        $('.dash-mode').click(function(){
            $('div.flocus-free-only').attr('class', 'flocus-plus-only')
        });

        ////////////////////////////////
        // MUSIC PLAYER SETTINGS
        ////////////////////////////////

        // Replace existing input box with new one
        $('input[name="custom-playlist"]').replaceWith($('<input>').attr({
            type: 'text',
            placeholder: 'Paste playlist or video URL here',
            class: 'form-control mb-3',
            id: 'playlistURL'
        }));

        // Remove disabled attribute from button with class "btn btn-primary align-self-start custom-save"
        $('.btn.btn-primary.align-self-start.custom-save').removeAttr('disabled').attr('id', 'playlistUpdate');

        $('#playlistUpdate').click(function(){
            var inputValue = $('#playlistURL').val();
            var id = getPlaylistID(inputValue);
            $('.music-player.spotify').attr('src', `https://open.spotify.com/embed/playlist/${id}?theme=0&amp;utm_source=iframe-api`);
        });

        ////////////////////////////////
        // SETTINGS TAB
        ////////////////////////////////

        // Replace Support Tab with Flocus Tweaks Settings tab
        $('#settModal-support-tab').html('<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M9 0C4.032 0 0 4.032 0 9C0 13.968 4.032 18 9 18C13.968 18 18 13.968 18 9C18 4.032 13.968 0 9 0ZM15.714 6.408L13.212 7.443C12.753 6.219 11.79 5.247 10.557 4.797L11.592 2.295C13.482 3.015 14.985 4.518 15.714 6.408ZM9 11.7C7.506 11.7 6.3 10.494 6.3 9C6.3 7.506 7.506 6.3 9 6.3C10.494 6.3 11.7 7.506 11.7 9C11.7 10.494 10.494 11.7 9 11.7ZM6.417 2.286L7.47 4.788C6.228 5.238 5.247 6.219 4.788 7.461L2.286 6.417C3.015 4.518 4.518 3.015 6.417 2.286ZM2.286 11.583L4.788 10.548C5.247 11.79 6.219 12.762 7.461 13.212L6.408 15.714C4.518 14.985 3.015 13.482 2.286 11.583ZM11.592 15.714L10.557 13.212C11.79 12.753 12.762 11.781 13.212 10.539L15.714 11.592C14.985 13.482 13.482 14.985 11.592 15.714Z" fill="white"></path></svg>  Flocus Tweaks ');
        $('.container-fluid.support').attr('class', 'container-fluid flocus-tweaks-settings')
        $('.flocus-tweaks-settings').html('<div class="row"><div class="col-12"><div class="mb-4">Nothing here yet</div></div></div>')
    });
})();