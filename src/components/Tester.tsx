import { client } from "../lib/sanity";
import { Locale, SanityProject } from "../lib/interface";

// create an async function to fetch project from sanity
const getProject = async (locale: Locale): Promise<SanityProject[]> => {
  try {
    const query = `
      * [_type == 'project'] {
          title {
            ${locale}
          },
          description {
            ${locale}
          },
      }`;
    const data = client.fetch(query);
    return data;
  } catch (error) {
    console.error("No data hommie : " + error)
  }
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function Tester({ locale }: { locale: any }) {
  const projects = await getProject(locale);
  console.log(projects[0].title);

  return projects ? (
    <div>
      {projects.map((project, index) => (
        <div key={index}>
          <p >{project.title[locale]}</p>
          <p>{locale}</p>
        </div>
      ))}
    </div>
  ) : (
    <div>
      No data to fetch :(
    </div>
  );
}