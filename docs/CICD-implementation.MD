A sample CI/CD pipeline implementation has been created through GitHub Actions. It is triggered upon a push to the main branch or a pull request.
-
It provides the following automation:
- Establishes a SSH connection to the deployment server
- Logins to Docker
- Builds a Docker imgae
- Uploads image to Docker Hub
- Transfer latest stable repository version to deployment server via rsync

Good practises 
- All sensitive information such as addresses or ports or login credentials is not passed directly but is instead accessed via Secrets for the repository.

This setup allows for a CI/CD pipeline where security is ensured and no code can reach production if it doesn't pass through the CI/CD pipeline.
Since the deployment process is automated, it would be easier to commit on a daily basis and release often.
