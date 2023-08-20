import Project from './Project'

import projects from './project-list.json'

const ProjectDisplay = () => {
  return (
    <div className='flex flex-wrap gap-5 pt-3 xs:justify-center sm:justify-start'>
      {
        projects.map((project) => (<Project key={project.title} title={project.title} link={project.link} desc={project.desc} image={project.image}/> ))
      }
      {/* <Project title={projects[0].title} desc={projects[0].desc} image={projects[0].image}/>  */}
    </div>
  )
}

export default ProjectDisplay
