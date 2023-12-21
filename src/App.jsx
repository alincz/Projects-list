import { useState } from "react";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectsSidebar from "./components/ProjectsSidebar";
import NewProject from "./components/NewProject";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });

  function handleAddTask(text) {
    setProjectsState((prevState) => {
      const taskId = Math.random();
      const newTask = {
        text: text,
        projectId: prevState.selectedProjectId,
        id: taskId,
      };

      return {
        ...prevState,
        tasks: [...prevState.tasks, newTask],
      };
    });
  }

  function handleDeleteTask() {}

  function handleSelectProject(id) {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id,
      };
    });
  }

  function handleStartAddProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  function handleCancelAddProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  }

  function handleAddProject(projectData) {
    setProjectsState((prevState) => {
      const projectId = Math.random();
      const newProject = {
        ...projectData,
        id: projectId,
      };

      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      };
      //am pus selectedProjectId egal cu  undefined,
      //ca atunci cand dam click pe save sa revina la
      //butonul createNewProject
    });
  }

  function handleDeleProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter(
          (project) => project.id !== prevState.selectedProjectId
          // fac update array ului projects,printr un modalitate imuutable ca sa
          // nu modific array ul original din memorie si modalitatea prin care
          // fac asta este prin utilizarea prevState.projects-adica iau proiectele
          // stocate din prevState,dupa folosesc filter care primeste o functie,
          // iar aceasta functie se va executa pt fiecare fiecare item din array-ul
          // projects si returneaza true daca un element trebuie pastrat si false daca trebuie
          // eliminat si apoi returneaza un array complet nou care contine numai
          // elementele care nu au fost eliminate. cu argumentul project returnez
          // true daca doresc sa pastrez elementul si false daca vreau sa renunt la el
          // si eu vreau sa scot item-ul,adica sa returneze false si folosesc aceasta comparatie
          // project.id !== prevState.selectedProjectId sa verific daca id-ul proiectului
          // la care ma uit,nu este egal cu id-ul care a fost selectat anterior
        ),
      };
    });
  }

  const selectedProject = projectsState.projects.find(
    (project) => project.id === projectsState.selectedProjectId
  );
  //find este o built-in method in vanilla javascript care ia ca argument
  //o functie care va fi executata pt fiecare element din acest array(projects)

  let content = (
    <SelectedProject
      project={selectedProject}
      onDelete={handleDeleProject}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
    />
  );

  if (projectsState.selectedProjectId === null) {
    content = (
      <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject} />
    );
    // onAdd-cu el am facut lift state up ,pt a duce date din App in
    // NewProject
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar
        onStartAddProject={handleStartAddProject}
        projects={projectsState.projects}
        onSelectProject={handleSelectProject}
      />
      {/* am pus projectsState.projects,pt ca este vorba de array-ul de proiecte
      pe care il gestionez in state si acum trasmit acest lucru prin intermediul
      unui props anumite proiecte catre componenta ProjectsSidebar */}
      {content}
    </main>
  );
}

export default App;
