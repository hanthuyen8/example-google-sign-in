import {CompactLogger, ICompactLogger} from "./Logger";
import Env, {EnvConfig} from "./EnvConfig";

export type Dependencies = {
    cLogger: ICompactLogger,
    env: EnvConfig,
};

const Deps: Dependencies = {
    cLogger: new CompactLogger(Env.isGke, ''),
    env: Env,
}

export default Deps;