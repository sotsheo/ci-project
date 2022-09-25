import Head from 'next/head'

export default function Auth ({ children }) {
    return (
        <>
            <Head>
                <meta charset="utf-8"/>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
                <meta name="description" content="Responsive Admin &amp; Dashboard Template based on Bootstrap 5"/>
                <meta name="author" content="AdminKit"/>
                <meta name="keywords" content="adminkit, bootstrap, bootstrap 5, admin, dashboard, template, responsive, css, sass, html, theme, front-end, ui kit, web"/>

                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link rel="shortcut icon" href="img/icons/icon-48x48.png" /> 

                <title>Đăng nhập</title>
            </Head>
            <main>{children}</main>
        </>
    )
}