// This is a work-around for not being able to delete certain tagged recipes.
// I *think* that normally you're supposed to use ``afterRecipes`` for this but that's bugged.
// Instead, you can force a reload immediately after the first player logs in which will re-apply
// removals for newly added tags. Gross.

global._evil_global_has_reloaded = false;

ServerEvents.loaded(event => {
    if (global._evil_global_has_reloaded) return;

    console.log("Forcing reload to work around KubeJS bugs...")
    Utils.server.runCommand("reload");  
    global._evil_global_has_reloaded = true;
});