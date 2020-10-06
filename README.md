# taskManagerApp
NodeJS Application using Express,JWT and file uploads
raghavendra@Raghavendras-MacBook-Pro task-manager % heroku create raghu-task-manager
Creating ⬢ raghu-task-manager... done
https://raghu-task-manager.herokuapp.com/ | https://git.heroku.com/raghu-task-manager.git
raghavendra@Raghavendras-MacBook-Pro task-manager % heroku config:set key=value
Setting key and restarting ⬢ raghu-task-manager... done, v3
key: value
raghavendra@Raghavendras-MacBook-Pro task-manager % heroku config
=== raghu-task-manager Config Vars
key: value
raghavendra@Raghavendras-MacBook-Pro task-manager % heroku config:unset key
Unsetting key and restarting ⬢ raghu-task-manager... done, v4
raghavendra@Raghavendras-MacBook-Pro task-manager % heroku config          
=== raghu-task-manager Config Vars

raghavendra@Raghavendras-MacBook-Pro task-manager % heroku config:set JWT_SECRET=thisisnew SENDGRID_API=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  
Setting JWT_SECRET, SENDGRID_API and restarting ⬢ raghu-task-manager... done, v5
JWT_SECRET:   thisisnew
SENDGRID_API: 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
raghavendra@Raghavendras-MacBook-Pro task-manager % heroku config:set MONGO_DB='mongodb+srv://taskapp:taskapp@cluster0.xhf2q.mongodb.net/task-manager-api?retryWrites=true&w=majority'
Setting MONGO_DB and restarting ⬢ raghu-task-manager... done, v6
MONGO_DB: mongodb+srv://taskapp:taskapp@cluster0.xhf2q.mongodb.net/task-manager-api?retryWrites=true&w=majority
raghavendra@Raghavendras-MacBook-Pro task-manager % git push heroku master 
Enumerating objects: 28, done.
Counting objects: 100% (28/28), done.
Delta compression using up to 4 threads
Compressing objects: 100% (23/23), done.
Writing objects: 100% (28/28), 43.25 KiB | 3.60 MiB/s, done.
Total 28 (delta 1), reused 0 (delta 0)
remote: Compressing source files... done.
remote: Building source:
remote: 
remote: -----> Node.js app detected
remote:        
remote: -----> Creating runtime environment
remote:        
remote:        NPM_CONFIG_LOGLEVEL=error
remote:        NODE_ENV=production
remote:        NODE_MODULES_CACHE=true
remote:        NODE_VERBOSE=false
remote:        
remote: -----> Installing binaries
remote:        engines.node (package.json):  unspecified
remote:        engines.npm (package.json):   unspecified (use default)
remote:        
remote:        Resolving node version 12.x...
remote:        Downloading and installing node 12.18.4...
remote:        Using default npm version: 6.14.6
remote:        
remote: -----> Installing dependencies
remote:        Installing node modules
remote:        
remote:        > sharp@0.26.1 install /tmp/build_b6ca9d59/node_modules/sharp
remote:        > (node install/libvips && node install/dll-copy && prebuild-install) || (node-gyp rebuild && node install/dll-copy)
remote:        
remote:        info sharp Downloading https://github.com/lovell/sharp-libvips/releases/download/v8.10.0/libvips-8.10.0-linux-x64.tar.br
remote:        
remote:        > fsevents@1.2.13 install /tmp/build_b6ca9d59/node_modules/fsevents
remote:        > node install.js
remote:        
remote:        
remote:        Skipping 'fsevents' build as platform linux is not supported
remote:        
remote:        > nodemon@1.18.9 postinstall /tmp/build_b6ca9d59/node_modules/nodemon
remote:        > node bin/postinstall || exit 0
remote:        
remote:        Love nodemon? You can now support the project via the open collective:
remote:         > https://opencollective.com/nodemon/donate
remote:        
remote:        added 438 packages in 8.304s
remote:        
remote: -----> Build
remote:        
remote: -----> Caching build
remote:        - node_modules
remote:        
remote: -----> Pruning devDependencies
remote:        removed 7 packages and audited 431 packages in 3.166s
remote:        
remote:        8 packages are looking for funding
remote:          run `npm fund` for details
remote:        
remote:        found 2 high severity vulnerabilities
remote:          run `npm audit fix` to fix them, or `npm audit` for details
remote:        
remote: -----> Build succeeded!
remote: -----> Discovering process types
remote:        Procfile declares types     -> (none)
remote:        Default types for buildpack -> web
remote: 
remote: -----> Compressing...
remote:        Done: 36.5M
remote: -----> Launching...
remote:        Released v7
remote:        https://raghu-task-manager.herokuapp.com/ deployed to Heroku
remote: 
remote: Verifying deploy... done.
To https://git.heroku.com/raghu-task-manager.git
 * [new branch]      master -> master
