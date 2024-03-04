import { projects, projectsVideo } from "@/utils/data";

const BASE_URL = 'https://addwebsite/work';

function generateSiteMap() {
    if (!projects || !projectsVideo) {
        console.error('No data available for sitemap generation');
        return '';
    }

    return (
        `<?xml version="1.0" encoding="UTF-8"?>
            <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
                <url>
                    <loc>https://addwebsite</loc>
                </url>
                <url>
                    <loc>https://addwebsite/team</loc>
                </url>
                <url>
                    <loc>https://addwebsite/work</loc>
                </url>
                <url>
                    <loc>https://addwebsite/jobs</loc>
                </url>  
                ${projects.map(({ project, id }) => {
            return `
                    <url>
                        <loc>${`${BASE_URL}/${project.slug}`}</loc>
                    </url>`;
        }).join('')}
                ${projectsVideo.map(({ project, id }) => {
            return `
                    <url>
                        <loc>${`${BASE_URL}/${project.slug}`}</loc>
                    </url>`;
        }).join('')}
            </urlset>`
    )
}

function SiteMap() {
    // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
    // We generate the XML sitemap with the posts data
    const sitemap = generateSiteMap();

    res.setHeader('Content-Type', 'text/xml');
    // we send the XML to the browser
    res.write(sitemap);
    res.end();

    return {
        props: {},
    };
}

export default SiteMap;