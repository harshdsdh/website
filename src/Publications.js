import React from "react";
import "./styles.css";

function Publications() {
    const pubs = [
        {
            link: "https://crcs.seas.harvard.edu/files/crcs/files/ai4sg_2020_paper_23.pdf",
            cite: 'Mishra, Harshit. "Reducing Word Embedding Bias Using Learned Latent Structure."'
        },
        {
            link: "https://projects.iq.harvard.edu/sites/projects.iq.harvard.edu/files/crcs/files/ai4sg-21_paper_28.pdf",
            cite: 'Mishra, Harshit, Namrata Madan Nerli, and Sucheta Soundarajan. "Keyword Recommendation for Fair Search."'
        },
        {
            link: "https://link.springer.com/chapter/10.1007/978-3-031-09316-6_12",
            cite: 'Mishra, Harshit, and Sucheta Soundarajan. "Keyword Recommendation for Fair Search." International Workshop on Algorithmic Bias in Search and Recommendation. Cham: Springer International Publishing, 2022.'
        },
        {
            link: "https://link.springer.com/chapter/10.1007/978-3-031-43421-1_25",
            cite: 'Mishra, Harshit, and Sucheta Soundarajan. "BalancedQR: A Framework for Balanced Query Recommendation." Joint European Conference on Machine Learning and Knowledge Discovery in Databases. Cham: Springer Nature Switzerland, 2023.'
        },
    ]
    const reversePubs = pubs.reverse();

    return (
        <div className="pub-container">
            <h2>Publications</h2>
            <ol className="pub-list">
                {reversePubs.map((p, index) => (
                    <li className="pub-List-elem" key={index}>{p.cite} <a href={p.link} target="_blank">[PDF]</a></li>
                ))}
            </ol>
        </div>
    );

}

export default Publications;