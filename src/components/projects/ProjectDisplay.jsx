import Project from './Project.jsx'
import projects from './project-list.json'

const ProjectDisplay = () => {
  return (
    <div className='flex flex-wrap gap-5 lg:gap-7 py-3 lg:py-5 lg:justify-items-center justify-between '>
      {
        projects.map((project) => (<Project key={project.title} title={project.title} link={project.link} desc={project.desc} image={project.image}/> ))
      }
    </div>
  )
}

export default ProjectDisplay
