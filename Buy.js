import React from 'react';

const Buy = () => {
    const products = [
        {
            id: 1,
            name: 'Celestron NexStar 8SE Telescope',
            image: 'https://m.media-amazon.com/images/I/61KOrgewaGL.__AC_SX300_SY300_QL70_FMwebp_.jpg',
            description: 'A powerful telescope perfect for both beginners and advanced users.',
            price: '$1,199.99',
            link: 'https://www.amazon.com/Celestron-NexStar-Computerized-Telescope-Astronomy/dp/B000GUFOC8',
        },
        {
            id: 2,
            name: 'Orion SpaceProbe 130ST Equatorial Reflector',
            image: 'https://m.media-amazon.com/images/I/71d-LuSE6XL._AC_SX466_.jpg',
            description: 'A great reflector telescope offering excellent viewing at an affordable price.',
            price: '$399.99',
            link: 'https://www.amazon.com/Orion-09007-SpaceProbe-Equatorial-Reflector/dp/B00D05BKOW',
        },
        {
            id: 3,
            name: 'SkyMaster 25x100 Binoculars',
            image: 'https://m.media-amazon.com/images/I/61GtecpnzXL.__AC_SX300_SY300_QL70_FMwebp_.jpg',
            description: 'Large-aperture binoculars perfect for astronomical viewing and long-range observation.',
            price: '$429.99',
            link: 'https://www.amazon.com/Celestron-SkyMaster-25X100-Binoculars-carrying/dp/B00008Y0VU/ref=sr_1_1?dib=eyJ2IjoiMSJ9.SJZxxGfPkKHhcZXTXMUyGIpUrT78zyrrFK7BiKs-I67k4UJxfjYAKEktaRHrWILNLfd1f_DX0rpX2Scj5ep3ABbxpU476teN1-auMZ6CAEqiOOu4e7YvZ1j7Zykwz8NZ58aBu9jXESnHnr53-gtiGOU6u19dHJiYmhWLfbBXsPFWii9bxDdaMRak8AoksX4_XGJp_Usq7OCpai2_eHj6R1LdZgzPlqzSE0L9sW9HNbs.Y7cSo8_gBqSaVVOPWsOZ5c8DVmpR4REcDw0HpmoMw4w&dib_tag=se&keywords=SkyMaster+25x100+Binoculars&qid=1727531256&sr=8-1',
        },
        {
            id: 4,
            name: 'ZWO ASI120MC-S Color Camera',
            image: 'https://m.media-amazon.com/images/I/418yLdB2xgL.__AC_SX300_SY300_QL70_FMwebp_.jpg',
            description: 'An excellent astrophotography camera for capturing vivid and sharp images.',
            price: '$149.99',
            link: 'https://www.amazon.com/ZWO-ASI662MC-Megapixel-Astronomy-Astrophotography/dp/B0B4SYLGFS/ref=sr_1_1?dib=eyJ2IjoiMSJ9.nihLR4PUbv6nvTgKYN2wLOUD755TXajPi_BKnwQxjiPGjHj071QN20LucGBJIEps.jd6aWC51CSz9cwLQh0ZY1_8dwmAgehEdEn_Z76BwM0o&dib_tag=se&keywords=ZWO+ASI120MC-S+Color+Camera&qid=1727532128&sr=8-1',
        },
        {
            id: 5,
            name: 'Celestron AstroMaster 70AZ Telescope',
            image: 'https://m.media-amazon.com/images/I/51A2C8kPkPL._AC_SX466_.jpg',
            description: 'An affordable telescope ideal for beginners.',
            price: '$199.99',
            link: 'https://www.amazon.com/Celestron-21061-AstroMaster-Refractor-Telescope/dp/B000MLHMAS/ref=sr_1_1?crid=JN1IQ7CEKTBM&dib=eyJ2IjoiMSJ9.0J4atGmF76UlqxjR3WUegg5YEBYcjSus1YH8kWzQCtQrRxRti2Y7YtDQBu4vWlMUfTMHqvcz6ti9Qf2ChWgT_XTZNQM1W-vHG5gMDc7f7XxbdkSaCLjePdQVzXCLUcAGROio3_aMQtFy-Nk98d878ZtL5b9g6CZ4TXqCwlpy2KjZUD-9QXW-HjonkwN4UbCGRTqwVquyioV7V1cPVzdLF6lVpfAAFsrU5egMWSgPKJ8.WabttavX10h_6n9wShPx9-w3G0YeUrj0tVhmnNcphXo&dib_tag=se&keywords=Celestron+AstroMaster+70AZ+Telescope&qid=1727532583&sprefix=%2Caps%2C809&sr=8-1',
        },
        {
            id: 6,
            name: 'Meade Instruments Infinity 102mm Telescope',
            image: 'https://m.media-amazon.com/images/I/51nZYhwSuuL.__AC_SX300_SY300_QL70_FMwebp_.jpg',
            description: 'A great telescope for both land and astronomical viewing.',
            price: '$249.99',
            link: 'https://www.amazon.com/Celestron-22065-Master-Refractor-Telescope/dp/B01E5DVONO/ref=sr_1_1?dib=eyJ2IjoiMSJ9.-ZGkB3fBhfObBxmDA_OsZsPm9KHoDPLuidGrMt3SRdfZJ-ZXC9klJPdyDJro6pesFbr3KFWGXCUjoQPBGerq0QrZjWWURt4JzFYI4jGV7QFnrvlFxfTZsshWk4PEtfmyat2-8L41Umn_3ibzfIkid1vYvto2CmtWzvkdG6i8uobLPlt9nNfkKwS-0EVCOX3eercAQRpHNZ2XXX7ikFIgmbY7qHw0lsrJZ_KjV6nf0uE.f19x8RxTNhhghI6XU67RM4Z9a_MLhzzVSPM9geORMLs&dib_tag=se&keywords=Meade+Instruments+Infinity+102mm+Telescope&qid=1727532786&sr=8-1',
        },
        {
            id: 7,
            name: 'Celestron SkyMaster 15x70 Binoculars',
            image: 'https://m.media-amazon.com/images/I/51OwHKeZOEL.__AC_SY300_SX300_QL70_FMwebp_.jpg',
            description: 'High-quality binoculars ideal for astronomy and wildlife.',
            price: '$99.99',
            link: 'https://www.amazon.com/Celestron-SkyMaster-Binoculars-Tripod-Adapter/dp/B00008Y0VN/ref=sr_1_1?crid=1EDD6ZLX1MCMO&dib=eyJ2IjoiMSJ9.R7u8URG0GI865gpmpizbE1a15g4bxE95cdCE5UBgZStYMU0IlikOVdazBpdpUH2JG3E9jK4hjFqAtVjWqcO2nrKfwm-r9shmtAI5Zechl2dEw2q8WTcyV5bxfl8uPX86VSvMn688qPnP6MugzKhY6r3qHt1izkv8BlQXcLZy867anrpFZSu1BzQiXhP8LqLxsya_cIAVL3lmYkRqxovjqlGYKiVFQ0QjtJvr7AurODs.MgizO0kZMObPG1ep1BKcakG7XhGZVxTX6_2CnAnBarU&dib_tag=se&keywords=Celestron+SkyMaster+15x70+Binoculars&qid=1727532856&sprefix=celestron+skymaster+15x70+binoculars%2Caps%2C718&sr=8-1',
        },
        {
            id: 8,
            name: 'Orion StarBlast 4.5 Astro Reflector Telescope',
            image: 'https://m.media-amazon.com/images/I/61D2NDvOTcL.__AC_SX300_SY300_QL70_FMwebp_.jpg',
            description: 'Compact telescope for beginner astronomers.',
            price: '$299.99',
            link: 'https://www.amazon.com/sspa/click?ie=UTF8&spc=MTozNTA1NDAwMDQyMjc4Nzg5OjE3Mjc1MzI5MDA6c3BfYXRmOjMwMDIwNjE4MTYyMjUwMjo6MDo6&url=%2FTelescope-80mm-Aperture-600mm-Astronomical%2Fdp%2FB09P8JQWF4%2Fref%3Dsr_1_1_sspa%3Fcrid%3DTWOCUR5CK2XP%26dib%3DeyJ2IjoiMSJ9.TrKFfzgKCsxbZBBu9kVlzOwM8DeDNSOrEeCt4lfroZlnod20y7Xpj-uy6Wt4ryfuleN2TMaLPVU5B-XYU0bv0F5e3-0g21WyvizUB8SK4JOt9KIAEBBqaNGgv28kQVzcG502vUPSfEAIhVP3F-O-fvbiVSjDqFZwP_f3Lqi2SkipVMoVS4f2to-ZKKarDAG5n5YxXEXFIP5UoWd0taweZ9Wax5MfSw7USLCa5bWEPr4.Ae2RwtP82x2LXVC4Dz0MO6tucknPJo8apovUb1R2t9Q%26dib_tag%3Dse%26keywords%3DOrion%2BStarBlast%2B4.5%2BAstro%2BReflector%2BTelescope%26qid%3D1727532900%26sprefix%3Dorion%2Bstarblast%2B4.5%2Bastro%2Breflector%2Btelescope%252Caps%252C469%26sr%3D8-1-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1',
        },
        {
            id: 9,
            name: 'Nikon Prostaff 7S 10x42 Binoculars',
            image: 'https://m.media-amazon.com/images/I/81o2sJbjZTL.__AC_SX300_SY300_QL70_FMwebp_.jpg',
            description: 'High-performance binoculars for outdoor activities.',
            price: '$229.95',
            link: 'https://www.amazon.com/Nikon-Binocular-Waterproof-Rubber-Armored-Full-Size/dp/B0B3JPG73Q/ref=sr_1_3?crid=2G7LCQPPNXDYP&dib=eyJ2IjoiMSJ9.OWjRwypY2rFoW2EvZDRAz3hL3Rdq18jqGqzt-YV2rIjSQABTkwXcwTsKZVQrf_4NhwJOOM4l2lug-KODKEDayAJ-wXAChhKzHMFgR8oT2QHMk3q7Wo1VSh63V8NwAnS_l1laabvLAvPL8IoUNok2p-2ArJ5v0bR-Kw95f99WglBE22a02Dgc2xvlpbp3_mS1a7w1xXlFcU2Qf-GPPQBpMSu-6fI9pQQeo9gQwQXtwY8.R1fy-KbrPQvM5GgS5W6si6Xc0rlsn_r96KBfcoBu3Q8&dib_tag=se&keywords=Nikon+Prostaff+7S+10x42+Binoculars&qid=1727533145&sprefix=nikon+prostaff+7s+10x42+binoculars%2Caps%2C721&sr=8-3',
        },
        {
            id: 10,
            name: 'Celestron 70mm Travel Scope',
            image: 'https://m.media-amazon.com/images/I/61T2V+BMJuL._AC_SY300_SX300_.jpg',
            description: 'Portable telescope perfect for travel and outdoor use.',
            price: '$129.99',
            link: 'https://www.amazon.com/Celestron-Refractor-Telescope-Beginners-Astronomy/dp/B001TI9Y2M/ref=sr_1_1?crid=2CAA8NDCY5CFK&dib=eyJ2IjoiMSJ9.DhRYGll7b-zx1fuslFcdnPsoIP6cZeInZbDyQir_lpn9nSRYcaB7yXfk0jDWLk4zPWQvDm8S9NZ-qHhmUwW2ouaczKV2yOJBi4idznmA1zi6kU4geUEOwnueQM_-Yrgftv7IMXtXbhO625D9TediWWk3cBSF7vYSsOaQGp4REi2atSki2-UG1CrKXfLrSatvgl5Nc8Wxcz8ksavLCxkLDIXR6lJR8X3Clao0RIR6JPo.OimeL8AWpBNYceWBbgskRrxo1OdStjNlYEkkTgal94s&dib_tag=se&keywords=Celestron+70mm+Travel+Scope&qid=1727533224&sprefix=nikon+prostaff+7s+10x42+binoculars%2Caps%2C875&sr=8-1',
        },
        {
            id: 11,
            name: 'Sky-Watcher ProED 100mm Doublet APO Refractor Telescope',
            image: 'https://m.media-amazon.com/images/I/61VitHnCpFL.__AC_SX300_SY300_QL70_FMwebp_.jpg',
            description: 'High-end telescope for serious astrophotographers.',
            price: '$1,399.99',
            link: 'https://www.amazon.com/Sky-Watcher-ProED-Doublet-Refractor-Telescope/dp/B004Q76Z5M/ref=sr_1_1?dib=eyJ2IjoiMSJ9.g7yPHVeLGkOUYNGjWoWC7qg25UzgJjvYbk2s_LChPFi25PSBGyVdPQl9jtbfkFvHdwSaXa59AjjxHCWB3jI5OM91OsToK45C89JCGI4vMJEfwxsxypwfPMcKM1BBWfAFRew_z8mamfZ6peO0KEfFFSVrlPQF7aEjDMasZR1IMd2nSxYQfmRnUfX4YnTG1NKaNvqV6T3qiMwMOdhSMJ4X0l73nOnogXEFsF3YEsvlB4M.pZ3WijByGvWgQOjUtDiy9O9Du0YplzJ5L5xqFTUg7X8&dib_tag=se&keywords=Sky-Watcher+ProED+100mm+Doublet+APO+Refractor+Telescope&qid=1727533275&sr=8-1',
        },
        {
            id: 12,
            name: 'Celestron 93430 90mm Mak Telescope',
            image: 'https://www.celestron.com/cdn/shop/products/52268_C90_Mak_1_570x380@2x.jpg?v=1590984368',
            description: 'Compact design with a 90mm aperture.',
            price: '$299.99',
            link: 'https://www.celestron.com/products/c90-mak-spotting-scope',
        },
        {
            id: 13,
            name: 'Zhumell Z100 Portable Altazimuth Reflector Telescope',
            image: 'https://m.media-amazon.com/images/I/51nCye564RL.__AC_SY300_SX300_QL70_FMwebp_.jpg',
            description: 'A portable telescope with great optics for beginners.',
            price: '$159.99',
            link: 'https://www.amazon.com/Zhumell-Portable-Altazimuth-Reflector-Telescope/dp/B07CD3MS17/ref=sr_1_1?crid=3BAK3OTHQ5ZFM&dib=eyJ2IjoiMSJ9.LxoVM0BlIQDjVLgc0LYMzADUhVDjQViE4zA2eySGheDdwQGI0hR6i4g-agd_jAL3QhPLVPqSo55d-efRNlmG6tXaieHhWgPPjx5WpA5svDQT6SMQGqOfm6hKV_WHjZIKZSyfteEWSMBFz3psKLq3G_zHWzIaQOzPEaxKhOcky_bxXIK_sz1VQin-c8gWfL02IgWGp2wqg1XVm2eliEEbloHhLNY31JKGJEvjpw7c5nk.A_Sq62WvjWgtizdwJI-2_84sTzd1EEYFnaPEROAtR3k&dib_tag=se&keywords=Zhumell+Z100+Portable+Altazimuth+Reflector+Telescope&qid=1727533604&sprefix=zhumell+z100+portable+altazimuth+reflector+telescope%2Caps%2C685&sr=8-1',
        },
        {
            id: 14,
            name: 'Celestron AstroFi 90 Wireless Telescope',
            image: 'https://www.celestron.com/cdn/shop/products/22201_AstroFi_90_2_570x380@2x.jpg?v=1546618276',
            description: 'Wireless telescope that connects to your smartphone.',
            price: '$499.99',
            link: 'https://www.celestron.com/products/astro-fi-90mm-refractor-telescope',
        },
        {
            id: 15,
            name: 'Meade 20218 Infinity 70mm Telescope',
            image: 'https://cdn.filestackcontent.com/auto_image/resize=width:700,height:700,fit:clip/compress/7UUwBS6zQZK1FfRpEbdf',
            description: 'An affordable beginner telescope with good optics.',
            price: '$199.99',
            link: 'https://www.meade.com/meade-infinity-70mm-altazimuth-refractor-telescope.pdp',
        },
        {
            id: 16,
            name: 'Astromania 2" 30mm Super Wide Angle Eyepiece',
            image: 'https://m.media-amazon.com/images/I/61xDvHmzbYL._AC_SX466_.jpg',
            description: 'Enhance your viewing experience with a wide angle eyepiece.',
            price: '$89.99',
            link: 'https://www.amazon.com/Astromania-Multi-Coated-Untra-Wide-Eyepiece-Telescope/dp/B06W5XNJHP/ref=sr_1_3?crid=26PFVF062V1Y5&dib=eyJ2IjoiMSJ9.r-3E92YAn0KfATFvzF5V5y1jofNkxZyi-YPJalTvl3eSGrlrStaTrrUIh1jKz8s0WFYpNF5uCztGjqVt35zyg-W3o17SrvDD9osiV9P6TaDPI5XcYipCbJTrl7CbDK2gfV9MMsY8pnzHT8nLHtnFlUJhnHRr1AnklJLCi8apInmazr1-IQtFsonfahQ_HzJoLX8n_5eJ_2oLqYmw3NHK-OXcV7bdy_wXwWdFwsM3Z64.w8Wvvs9sITEAtFgdetyuwkbIzsEdlPx578uI1nhjn-Y&dib_tag=se&keywords=Astromania+2%22+30mm+Super+Wide+Angle+Eyepiece&qid=1727533838&sprefix=astromania+2+30mm+super+wide+angle+eyepiece%2Caps%2C657&sr=8-3',
        },
        {
            id: 17,
            name: 'Celestron Advanced VX 8" Schmidt-Cassegrain Telescope',
            image: 'https://m.media-amazon.com/images/I/51gZnhg+BcL._AC_SX466_.jpg',
            description: 'A high-quality telescope suitable for advanced users.',
            price: '$1,899.00',
            link: 'https://www.amazon.com/Celestron-12026-Advanced-VX-SCT/dp/B00AZDDATU/ref=sr_1_1?crid=2JIZBVRJSKUM8&dib=eyJ2IjoiMSJ9.i4yeDKJ4mZg9D_AWpvQUvQMrbCf3frlq6-Sm7ogcUkDxB6OOAvFha2tcSEpXDz2c3cRaXqRtV2Pb3talIU-R-1km8dgLNNSFihG6jPcFMoVhjo7s4Ve06K04a2K6Qz4Q_Jv1jFKWLm_95u32RwcBv3QXF-kayrQi-3xCIG7SWbX5xKH2Em4T65BbVVZepHzu_YoKctxc-XxckbEprAkZDBml_va50nG26kzy9n6uN6s.nEv7eXZU46tuh1A6C8hvWjZTJ-8R6um71H9qJBUcnqQ&dib_tag=se&keywords=Celestron+Advanced+VX+8%22+Schmidt-Cassegrain+Telescope&qid=1727533914&sprefix=celestron+advanced+vx+8+schmidt-cassegrain+telescope%2Caps%2C843&sr=8-1',
        },
        {
            id: 18,
            name: 'Skywatcher 102mm Mak-Cass Telescope',
            image: 'https://m.media-amazon.com/images/I/61yKMEeGnAL._AC_SX466_.jpg',
            description: 'Compact telescope with high-quality optics.',
            price: '$299.99',
            link: 'https://www.amazon.com/SkyWatcher-S11510-Maksutov-Cassegrain-102mm-Black/dp/B00Z4HX0G0/ref=sr_1_1?crid=3J2LA0XTOHTVX&dib=eyJ2IjoiMSJ9.ghypb5jWs68gFhNcAbEoVj0X_91JELRbl_jbkfRDOjQ_SLdyh0EIUQlrjRC-9QGcnQmcDpWE19gyFxECz0rXsbNMRNQYxtAK4WxAdyFfrfRTvgJ_LY_YccUsva9mTbv3EtliDr--PgsZ7ZGgBmaqhqg-bHAz_U95TXdQ3d7wheR86PUrLnW6AiW6TSn0oPsVqulKPbGtr7W3nQmcdDQiOdfBDG7iPitcA_cOWXWHNX0.ZvsUij3_k2OjQq9d6oILfCoKmiQfHXozxH1_SSiUDcg&dib_tag=se&keywords=Skywatcher+90mm+Mak-Cass+Telescope&qid=1727533984&sprefix=skywatcher+90mm+mak-cass+telescope%2Caps%2C766&sr=8-1',
        },
        {
            id: 19,
            name: 'Vortex Optics Diamondback HD 10x42 Binoculars',
            image: 'https://m.media-amazon.com/images/I/81uUUGIYCVL._AC_SX466_.jpg',
            description: 'Durable and lightweight binoculars for outdoor adventures.',
            price: '$249.99',
            link: 'https://www.amazon.com/Vortex-Optics-Diamondback-10x42-Binoculars/dp/B07V3LDFCR/ref=sr_1_1?crid=2BA1TG64PBO87&dib=eyJ2IjoiMSJ9.Mzm_JSr1eDJyosVFMDfc41OMhSQwToqQv92H-SKSa4mwDjwnpOx3HgIxe3jOjiCKPI2I8I1D4v13MS3d2t_ZqASMeIUUgelgcbvGqsdHHH7nUAlFOM9A1ppFHzfKnLcez5t9-NWdOhlWQPYi4vdCD8P1y1faDJQGj6uLvjBJ4LGvSmlB6v0pUqsYVx0QLgP9B4b1A7PP7Y6zStB6ayxWdDxJO6JRzg8a4OTOkRS6QKQ.i8PC04ciKAso_e7NiBSwIAGR3sQU_46iTE0cXX1Gkz0&dib_tag=se&keywords=Vortex+Optics+Diamondback+HD+10x42+Binoculars&qid=1727534053&sprefix=vortex+optics+diamondback+hd+10x42+binoculars%2Caps%2C1511&sr=8-1',
        },
        {
            id: 20,
            name: 'Orion 10015 StarBlast 4.5 Astro Reflector Telescope',
            image: 'https://m.media-amazon.com/images/I/71nwyTSyYoL._SL1500_.jpg',
            description: 'A compact and lightweight telescope for beginners.',
            price: '$299.99',
            link: 'https://www.amazon.in/Orion-10015-StarBlast-Reflector-Telescope/dp/B00D12U1IK',
        },
    ];

    return (
        <div className="buy-page">
            <h1 className="page-title">Explore Astronomy Equipment</h1>
            <div className="products-container">
                {products.map(product => (
                    <div key={product.id} className="product-card">
                        <img src={product.image} alt={product.name} className="product-image" />
                        <h3 className="product-name">{product.name}</h3>
                        <p className="product-description">{product.description}</p>
                        <p className="product-price">{product.price}</p>
                        <a
                            href={product.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="buy-link"
                        >
                            Buy Now
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Buy;
