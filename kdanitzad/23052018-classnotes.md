#Miercoles 23 de Mayo 2018 | comandos para repasar

git clone rutadespuesdehaberpuestoFork
git remote -v
git remote add "nombrequeyoquiera" rutaoriginal

`git remote -v` => Indica los remotes sincronizados en local
`git remote add <remote_alias> <ssh/https url>` => Agrega un remote a nuestro local
`git pull <remote> <branch>`
http://karma-runner.github.io/2.0/dev/git-commit-msg.html
Guía para nombrar commits.
`git push <remote> <branch>`
`git remote remove <remote_alias>`

`git branch <branch_name>` => Crea una rama
`git checkout <branch_name>` => Cambiar a la rama branch_name
`git checkout -b <branch_name>` => Crea una rama y nos cambia a ella
`git branch -d <branch_name>` => Borra la rama (No debemos estar en ella)
`git branch -D <branch_name>` => Borra la rama aunque tenga commits o cambios pendientes.

git log -n (historia de los logs, n indica cuanto commits del mas reciente al mas viejo"
