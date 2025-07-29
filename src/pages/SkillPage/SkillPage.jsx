import Header from '@cm/Header/Header'
import Section from '@ly/Section/Section'
import SkillsGrid from '@cm/SkillPage/Components/SkillGrid/SkillGrid'
import ProcessGrid from '@cm/SkillPage/Components/ProcessGrid/ProcessGrid'
import ToolsCloud from '@cm/SkillPage/Components/ToolsCloud/ToolsCloud'
import AchievementsGrid from '@cm/SkillPage/Components/AchievementsGrid/AchievementsGrid'
import { 
  designSkillsData, 
  webSkillsData, 
  designProcessData, 
  achievementsData, 
  toolsData 
} from '@data/skillsData'

export function SkillPage() {
  return (
    <>
      <Header 
        title="Skills & Technologien"
        text="Meine Expertise in Design, Development und kreativen Workflows - von der ersten Idee bis zur finalen Umsetzung."
      />

      <Section id="design-skills">
        <SkillsGrid 
          title="Design Software"
          data={designSkillsData}
        />
      </Section>

      <Section id="web-skills">
        <SkillsGrid 
          title="Web Technologien"
          data={webSkillsData}
        />
      </Section>

      <Section id="design-process">
        <ProcessGrid 
          title="Design Process"
          data={designProcessData}
        />
      </Section>

      <Section id="tools">
        <ToolsCloud 
          title="Tools & Software"
          data={toolsData}
        />
      </Section>

      <Section id="achievements">
        <AchievementsGrid 
          title="Erfolge & Meilensteine"
          data={achievementsData}
        />
      </Section>
    </>
  )
}