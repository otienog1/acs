import { getExperience } from "@/components/page"
import ExperienceDetail from "@/components/ExperienceDetail"
import content from "@/lib/content.json"

const Experience = async () => {
    await getExperience(166)
    const exp = content.experiences[1].acf
    return <ExperienceDetail {...exp} />
}

export default Experience
