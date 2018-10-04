namespace :dist do
  desc 'Build dist locally'
  task :build do
    run_locally do
      execute :rm, '-rf', 'dist'
      execute :ember, 'build', '-prod'
    end
  end

  desc 'Upload local dist to remote'
  task :upload do
    on(roles :app) do
      within(current_path) { execute :rm, '-rf', "dist" }
      upload! 'dist', current_path, recursive: true
    end
  end
end

namespace :ds do
  desc 'Builds dist (compiled app) and uplods it to remote'
  task :deploy => ['dist:build', 'dist:upload']
end

# Taches supplementaires insérées au workflow du deploy capistrano
# Pour memo voici le workflow 'classique'
#   deploy:starting    - start a deployment, make sure everything is ready
#   deploy:started     - started hook (for custom tasks)
#   deploy:updating    - update server(s) with a new release
#   deploy:updated     - updated hook
#   deploy:publishing  - publish the new release
#   deploy:published   - published hook
#   deploy:finishing   - finish the deployment, clean up everything
#   deploy:finished    - finished hook

# webserver tasks disabled: the server is too cheap to be effective against static assets
# after 'deploy:started',   'remote:webserver:stop'
# after 'deploy:published', 'remote:npm'
after 'deploy:published', 'ds:deploy'
# after 'deploy:finished',  'remote:webserver:start'
