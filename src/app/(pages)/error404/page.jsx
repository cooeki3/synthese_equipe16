import Error404Page from "@/app/_components/Error404Page.jsx"

export async function generateMetadata({ params }) {
    const { storyId } = params;
    const story = await getStoryInfoById(storyId);

    return {
        title: "Erreur 404",
    };
}
const Error404 = () => {
    return (
        <div>
            <Error404Page />
        </div>
    );
};

export default Error404;
