import { getExperience } from "@/components/page"
import ExperienceDetail from "@/components/ExperienceDetail"
import content from "@/lib/content.json"

const Experience = async () => {
    await getExperience(168)
    const exp = content.experiences[3].acf
    return <ExperienceDetail {...exp} />
}

export default Experience
