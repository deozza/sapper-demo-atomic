<script>
    import { _ } from 'svelte-i18n';
</script>

<svelte:head>
    <link href="https://fonts.googleapis.com/css2?family=MedievalSharp&display=swap" rel="stylesheet">
</svelte:head>

<nav class="menu-dark">
    <div class="flex-row flex-between">
        <a href="/">RollingDice</a>
        <ul class="flex-row flex-between">
            <li>
                <a href="/">{$_('layout_index.menu.home')}</a>
            </li>
            <li>
                <a href="/signin">{$_('layout_index.menu.signin')}</a>
            </li>
            <li>
                <a href="/signup">{$_('layout_index.menu.signup')}</a>
            </li>
        </ul>
    </div>
</nav>

<div class="content">
    <slot></slot>
</div>

<style>
    nav {
        height: 60px;
        width: 100%;
        position: fixed;
        z-index: 1;
        top: 0;
        left: 0;
        padding-top: 20px;
    }

    nav.menu-dark {
        background-color: black;
    }

    nav > div.flex-row > a {
        font-size: 36px;
        color: #b56d19;
        font-family: 'MedievalSharp', cursive;
    }

    nav > div.flex-row {
        padding-left: 80px;
        padding-right: 80px;
    }

    nav > div > ul {
        list-style: none;
    }

    nav > div > ul > li > a {
        padding: 10px 15px;
        font-size: 18px;
    }

    nav > div > ul > li > a:hover {
        color:#b56d19;
        transition: all ease 0.2s;
    }

    a {
        color: white;
        text-decoration: none;
    }

    div.content {
        margin-top: 80px
    }
</style>