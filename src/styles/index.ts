import { createGlobalStyle } from "styled-components";

export const Reset = createGlobalStyle`
    /* http://meyerweb.com/eric/tools/css/reset/ 
    v2.0 | 20110126
    License: none (public domain)
    */

    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video, input, main, textarea {
        font: inherit;
        font-size: 1rem;
        text-decoration: none;
        list-style: none;
        margin: 0;
        padding: 0;
        border: 0;
        vertical-align: baseline;
        box-sizing: border-box;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: "";
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
`;

export const RootVariables = createGlobalStyle`
    :root{
        //THEME COLORS
        --color-brand-1: #4529E6;
        --color-brand-2: #5126EA;
        --color-brand-3: #B0A6F0;
        --color-brand-4: #EEEEEE;
        --color-brand-5: #F3F5FF;

        //GENERAL COLORS
        --color-white: #FFFFFF;
        --color-black: #000000;

        //GREY SCALE
        --grey-0: #0B0D0D;
        --grey-1: #212529;
        --grey-2: #495057;
        --grey-3: #868e96;
        --grey-4: #adb5bd;
        --grey-5: #ced4da;
        --grey-6: #dee2e6;
        --grey-7: #e9ecef;
        --grey-8: #f1f3f5;
        --grey-9: #F8F9FA;
        --grey-10: #fdfdfd;

        //FEEDBACK
        --alert-1:#cd742b;
        --sucess-1: #18794e;
        --failed-1:  #b80606;

        //COLORS PROFILE
        --color-profile-1: #349974;
        --color-profile-2: #2a7d5f;
        --color-profile-3: #006f7d;

        //FONTS-SIZE
        --font-size-8: 8px;
        --font-size-10: 10px;
        --font-size-12: 12px;
        --font-size-14: 14px;
        --font-size-16: 16px;
        --font-size-18: 18px;
        --font-size-20: 20px;
        --font-size-24: 24px;
        --font-size-28: 28px;
        --font-size-32: 32px;
        --font-size-36: 36px;
        --font-size-44: 44px;

        //FONTS-WEIGHT
        --font-weight-100: 100;
        --font-weight-200: 200;
        --font-weight-300: 300;
        --font-weight-400: 400;
        --font-weight-500: 500;
        --font-weight-600: 600;
        --font-weight-700: 700;


        //FONTS
        --inter: "Inter";
        --lexend: "Lexend", sans-serif;
        --lexend-exa: "Lexend Exa", sans-serif;
        --pacifico: "Pacifico", cursive;
        --roboto: "Roboto", sans-serif;

        //BOX-SHADOW
        --box-shadow-1: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        --box-shadow-2: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
        --box-shadow-3: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;
    }
`;

export const GlobalStyles = createGlobalStyle`

    html, body, #__next {
        height: 100%;
        min-height: 100vh;
        width: 100%;
        overflow-x: hidden;  
        overflow-y: auto;
        font-family: var(--roboto)
    }

    button {
        cursor: pointer;
    }
    `;
