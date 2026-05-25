import { getExperience } from "@/components/page"
import ExperienceDetail from "@/components/ExperienceDetail"
import content from "@/lib/content.json"

const Experience = async () => {
    await getExperience(167)
    const exp = content.experiences[2].acf
    return <ExperienceDetail {...exp} />
}

export default Experience
