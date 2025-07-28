import data from "./data/projectHomeData"
import ProjectList from "./components/ProjectList";

const dataProjectList = data.map((item) => ({
    image: item.image,
    alt: item.alt,
    title: item.title,
    description: item.description,
    link: item.link,
    tags: item.tags
}));

export function ProjectListHomePage() {
    return (
        <ProjectList
            title="Meine Projekte"
            data={dataProjectList}
            showCta={true}
            link="/projekte"
            cta="Alle Projekte ansehen"
        />
    );
}
