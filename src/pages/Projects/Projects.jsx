import React, { useEffect, useState } from 'react';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null); // modal er jonno
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('./projects.json')
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch projects data');
        return res.json();
      })
      .then(data => {
        setProjects(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center py-10">Loading projects...</p>;
  if (error) return <p className="text-center py-10 text-red-600">Error: {error}</p>;

  return (
    <section id="projects" className="bg-base-200 py-20 px-6">
      <div className="max-w-7xl px-4 mx-auto">
        <h2 className="text-4xl font-bold text-primary text-center mb-14">My Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
          {projects.map((project) => (
            <div
              key={project.id}
              className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300 flex flex-col"
            >
              <div className="w-full">
                <figure className="relative h-64">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent px-4 py-2">
                    <h3 className="text-xl text-white font-bold">{project.name}</h3>
                  </div>
                </figure>
              </div>

              <div className="card-body w-full overflow-y-auto max-h-64">
                <p className="text-gray-700 mb-4">{project.description}</p>
                <div className="flex justify-between flex-wrap gap-3">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm btn-secondary"
                  >
                    Live Site
                  </a>
                  <a
                    href={project.clientRepo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm btn-outline btn-primary"
                  >
                    GitHub Code
                  </a>
                  <button
                    className="btn btn-sm btn-accent flex-1"
                    onClick={() => setSelectedProject(project)}
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <dialog open className="modal modal-bottom sm:modal-middle z-50">
          <div className="modal-box max-w-3xl">
            <form method="dialog">
              <button
                onClick={() => setSelectedProject(null)}
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </button>
            </form>

            <h3 className="font-bold text-2xl mb-4">{selectedProject.name}</h3>

            <img
              src={selectedProject.image}
              alt={selectedProject.name}
              className="rounded w-full mb-4"
            />

            <p className="mb-4">{selectedProject.description}</p>

            {selectedProject.features && (
              <>
                <h4 className="font-semibold">Features:</h4>
                <ul className="list-disc list-inside mb-4">
                  {selectedProject.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </>
            )}

            {selectedProject.technologies && (
              <>
                <h4 className="font-semibold">Technologies:</h4>
                <ul className="list-disc list-inside mb-4">
                  {selectedProject.technologies.map((tech, index) => (
                    <li key={index}>{tech}</li>
                  ))}
                </ul>
              </>
            )}

            {selectedProject.backend && (
              <>
                <h4 className="font-semibold">Backend:</h4>
                <ul className="list-disc list-inside mb-4">
                  {selectedProject.backend.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </>
            )}

            <div className="flex flex-wrap gap-3 mt-4">
              {selectedProject.liveLink && (
                <a
                  href={selectedProject.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-sm btn-primary"
                >
                  Live Site
                </a>
              )}
              {selectedProject.clientRepo && (
                <a
                  href={selectedProject.clientRepo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-sm btn-outline"
                >
                  Client Repo
                </a>
              )}
              {selectedProject.serverRepo && (
                <a
                  href={selectedProject.serverRepo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-sm btn-outline"
                >
                  Server Repo
                </a>
              )}
            </div>
          </div>
        </dialog>
      )}
    </section>
  );
};

export default Projects;
