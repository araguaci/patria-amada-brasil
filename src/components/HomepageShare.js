import React from "react";
import styles from "./HomepageShare.module.css";
import Link from "@docusaurus/Link";

const ShareList = [
    {
        title: "whatsapp",
        img: "/img/BaseShare/whatsapp.svg",
        link: "https://web.whatsapp.com/send?text=P%C3%A1tria%20Amada%20Brasil%0Ahttps%3A%2F%2Fpatria-amada-brasil.vercel.app%2F",
    },
    {
        title: "twitter",
        img: "/img/BaseShare/twitter.svg",
        link: "https://twitter.com/intent/tweet?url=https%3A%2F%2Fpatria-amada-brasil.vercel.app%2F&text=P%C3%A1tria%20Amada%20Brasil%20",
    },
    {
        title: "facebook",
        img: "/img/BaseShare/facebook.svg",
        link: "https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fpatria-amada-brasil.vercel.app%2F",
    },
    {
        title: "linkedin",
        img: "/img/BaseShare/linkedin.svg",
        link: "https://www.linkedin.com/shareArticle?mini=true&url=https://patria-amada-brasil.vercel.app/",
    },
    {
        title: "telegram",
        img: "/img/BaseShare/telegram.svg",
        link: "https://telegram.me/share/url?url=https://patria-amada-brasil.vercel.app/&text=P%C3%A1tria%20Amada%20Brasil%20",
    },
    {
        title: "pinterest",
        img: "/img/BaseShare/pinterest.png",
        link: "https://pinterest.com/pin/create/button/?url=https://patria-amada-brasil.vercel.app/&media=&description=P%C3%A1tria%20Amada%20Brasil%20",
    },
];

function FeatureShare({ title, img, link }) {
    return (
        <Link to={link} title={title}>
            <img src={img} alt={title} />
        </Link>    
    );
}

export default function HomepageShare() {
    return (
    <section className={styles.sharebtn}>
        <div className="sharebtn">            
            <div>Compartilhe<br />
                {ShareList.map((props, idx) => (
                <FeatureShare key={idx} {...props} />
                ))}
            </div>
        </div>
    </section>
    );
}
