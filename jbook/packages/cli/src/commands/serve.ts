import path from 'path'; 
import {Command} from 'commander';
import { serve } from 'local-api';

export const serveCommand = new Command()
  .command('serve [filename]')
  .description('open a file for editing')
  .option('-p --port <number>', 'port to run server on', '4005')
  .action(async (filename = 'notebook.js', options: { port: string}) => {
    try {
      const dir = path.join(process.cwd(), path.dirname(filename));
      await serve(parseInt(options.port), path.basename(filename), dir);
      console.log(`Opened ${filename}. Navigate to http://localhost:${options.port} to edit.`);
    }
    catch (err) {
      // err 'Object is of type "unknown"'. declaring type like err:Exception and err:Error don't work, 
      // but there's probably an easy way to avoid this. For now ignoring so I can continue... 

      // @ts-ignore
      if (err.code === 'EADDRINUSE') {
        console.log('Port already in use numbnuts, try another port.');
      } else {
        // @ts-ignore
        console.log('problem, dude: ', err.message);
      }
      process.exit(1);
    }
    
  })
