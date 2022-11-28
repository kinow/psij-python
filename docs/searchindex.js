Search.setIndex({docnames:[".generated/modules",".generated/psij",".generated/psij.executors",".generated/psij.executors.batch",".generated/psij.launchers",".generated/psij.launchers.scripts","api","development/contributing","development/index","development/programming","development/tutorial_add_executor","getting_started","index","user_guide"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":5,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":3,"sphinx.domains.rst":2,"sphinx.domains.std":2,"sphinx.ext.intersphinx":1,"sphinx.ext.viewcode":1,sphinx:56},filenames:[".generated/modules.rst",".generated/psij.rst",".generated/psij.executors.rst",".generated/psij.executors.batch.rst",".generated/psij.launchers.rst",".generated/psij.launchers.scripts.rst","api.rst","development/contributing.rst","development/index.rst","development/programming.rst","development/tutorial_add_executor.rst","getting_started.rst","index.rst","user_guide.rst"],objects:{"":[[1,0,0,"-","psij"]],"psij.Export":[[1,2,1,"","envelope"],[1,2,1,"","export"],[1,2,1,"","to_dict"]],"psij.Import":[[1,2,1,"","from_dict"],[1,2,1,"","load"]],"psij.InvalidJobException":[[1,4,1,"","exception"],[1,4,1,"","message"]],"psij.Job":[[1,2,1,"","cancel"],[1,4,1,"","executor"],[1,5,1,"","id"],[1,5,1,"","native_id"],[1,2,1,"","set_job_status_callback"],[1,4,1,"","spec"],[1,5,1,"","status"],[1,2,1,"","wait"]],"psij.JobAttributes":[[1,2,1,"","get_custom_attribute"],[1,2,1,"","set_custom_attribute"]],"psij.JobExecutor":[[1,2,1,"","attach"],[1,2,1,"","cancel"],[1,2,1,"","get_executor_names"],[1,2,1,"","get_instance"],[1,2,1,"","list"],[1,5,1,"","name"],[1,2,1,"","register_executor"],[1,2,1,"","set_job_status_callback"],[1,2,1,"","submit"],[1,5,1,"","version"]],"psij.JobExecutorConfig":[[1,4,1,"","DEFAULT"],[1,4,1,"","DEFAULT_WORK_DIRECTORY"],[1,5,1,"","launcher_log_file"],[1,5,1,"","work_directory"]],"psij.JobSpec":[[1,5,1,"","name"],[1,5,1,"","to_dict"]],"psij.JobState":[[1,4,1,"","ACTIVE"],[1,4,1,"","CANCELED"],[1,4,1,"","COMPLETED"],[1,4,1,"","FAILED"],[1,4,1,"","NEW"],[1,4,1,"","QUEUED"],[1,5,1,"","final"],[1,2,1,"","is_greater_than"]],"psij.JobStatus":[[1,5,1,"","final"]],"psij.JobStatusCallback":[[1,2,1,"","job_status_changed"]],"psij.Launcher":[[1,4,1,"","DEFAULT_LAUNCHER_NAME"],[1,2,1,"","get_instance"],[1,2,1,"","get_launch_command"],[1,2,1,"","get_launcher_failure_message"],[1,2,1,"","is_launcher_failure"],[1,2,1,"","register_launcher"]],"psij.ResourceSpec":[[1,5,1,"","version"]],"psij.ResourceSpecV1":[[1,5,1,"","computed_node_count"],[1,5,1,"","computed_process_count"],[1,5,1,"","computed_processes_per_node"],[1,5,1,"","version"]],"psij.SubmitException":[[1,4,1,"","exception"],[1,4,1,"","message"],[1,4,1,"","transient"]],"psij.UnreachableStateException":[[1,4,1,"","status"]],"psij.descriptor":[[1,1,1,"","Descriptor"]],"psij.exceptions":[[1,3,1,"","InvalidJobException"],[1,3,1,"","SubmitException"],[1,3,1,"","UnreachableStateException"]],"psij.exceptions.InvalidJobException":[[1,4,1,"","exception"],[1,4,1,"","message"]],"psij.exceptions.SubmitException":[[1,4,1,"","exception"],[1,4,1,"","message"],[1,4,1,"","transient"]],"psij.exceptions.UnreachableStateException":[[1,4,1,"","status"]],"psij.executors":[[2,1,1,"","CobaltJobExecutor"],[2,1,1,"","LocalJobExecutor"],[2,1,1,"","LsfJobExecutor"],[2,1,1,"","SlurmJobExecutor"],[3,0,0,"-","batch"],[2,0,0,"-","flux"],[2,0,0,"-","local"],[2,0,0,"-","rp"]],"psij.executors.CobaltJobExecutor":[[2,2,1,"","generate_submit_script"],[2,2,1,"","get_cancel_command"],[2,2,1,"","get_status_command"],[2,2,1,"","get_submit_command"],[2,2,1,"","job_id_from_submit_output"],[2,2,1,"","parse_status_output"],[2,2,1,"","process_cancel_command_output"]],"psij.executors.LocalJobExecutor":[[2,2,1,"","attach"],[2,2,1,"","cancel"],[2,2,1,"","list"],[2,2,1,"","submit"]],"psij.executors.LsfJobExecutor":[[2,2,1,"","generate_submit_script"],[2,2,1,"","get_cancel_command"],[2,2,1,"","get_status_command"],[2,2,1,"","get_submit_command"],[2,2,1,"","job_id_from_submit_output"],[2,2,1,"","parse_status_output"],[2,2,1,"","process_cancel_command_output"]],"psij.executors.SlurmJobExecutor":[[2,2,1,"","generate_submit_script"],[2,2,1,"","get_cancel_command"],[2,2,1,"","get_status_command"],[2,2,1,"","get_submit_command"],[2,2,1,"","job_id_from_submit_output"],[2,2,1,"","parse_status_output"],[2,2,1,"","process_cancel_command_output"]],"psij.executors.batch":[[3,0,0,"-","batch_scheduler_executor"],[3,0,0,"-","cobalt"],[3,0,0,"-","escape_functions"],[3,0,0,"-","lsf"],[3,0,0,"-","pbspro"],[3,0,0,"-","script_generator"],[3,0,0,"-","slurm"],[3,0,0,"-","template_function_library"]],"psij.executors.batch.batch_scheduler_executor":[[3,1,1,"","BatchSchedulerExecutor"],[3,1,1,"","BatchSchedulerExecutorConfig"],[3,3,1,"","InvalidJobStateError"],[3,6,1,"","check_status_exit_code"]],"psij.executors.batch.batch_scheduler_executor.BatchSchedulerExecutor":[[3,2,1,"","attach"],[3,2,1,"","cancel"],[3,2,1,"","generate_submit_script"],[3,2,1,"","get_cancel_command"],[3,2,1,"","get_status_command"],[3,2,1,"","get_submit_command"],[3,2,1,"","job_id_from_submit_output"],[3,2,1,"","list"],[3,2,1,"","parse_status_output"],[3,2,1,"","process_cancel_command_output"],[3,2,1,"","submit"]],"psij.executors.batch.cobalt":[[3,1,1,"","CobaltExecutorConfig"],[3,1,1,"","CobaltJobExecutor"]],"psij.executors.batch.cobalt.CobaltJobExecutor":[[3,2,1,"","generate_submit_script"],[3,2,1,"","get_cancel_command"],[3,2,1,"","get_status_command"],[3,2,1,"","get_submit_command"],[3,2,1,"","job_id_from_submit_output"],[3,2,1,"","parse_status_output"],[3,2,1,"","process_cancel_command_output"]],"psij.executors.batch.escape_functions":[[3,6,1,"","bash_escape"]],"psij.executors.batch.lsf":[[3,1,1,"","LsfExecutorConfig"],[3,1,1,"","LsfJobExecutor"]],"psij.executors.batch.lsf.LsfJobExecutor":[[3,2,1,"","generate_submit_script"],[3,2,1,"","get_cancel_command"],[3,2,1,"","get_status_command"],[3,2,1,"","get_submit_command"],[3,2,1,"","job_id_from_submit_output"],[3,2,1,"","parse_status_output"],[3,2,1,"","process_cancel_command_output"]],"psij.executors.batch.pbspro":[[3,1,1,"","PBSProExecutorConfig"],[3,1,1,"","PBSProJobExecutor"]],"psij.executors.batch.pbspro.PBSProJobExecutor":[[3,2,1,"","generate_submit_script"],[3,2,1,"","get_cancel_command"],[3,2,1,"","get_status_command"],[3,2,1,"","get_submit_command"],[3,2,1,"","job_id_from_submit_output"],[3,2,1,"","parse_status_output"],[3,2,1,"","process_cancel_command_output"]],"psij.executors.batch.script_generator":[[3,1,1,"","SubmitScriptGenerator"],[3,1,1,"","TemplatedScriptGenerator"]],"psij.executors.batch.script_generator.SubmitScriptGenerator":[[3,2,1,"","generate_submit_script"]],"psij.executors.batch.script_generator.TemplatedScriptGenerator":[[3,2,1,"","generate_submit_script"]],"psij.executors.batch.slurm":[[3,1,1,"","SlurmExecutorConfig"],[3,1,1,"","SlurmJobExecutor"]],"psij.executors.batch.slurm.SlurmJobExecutor":[[3,2,1,"","generate_submit_script"],[3,2,1,"","get_cancel_command"],[3,2,1,"","get_status_command"],[3,2,1,"","get_submit_command"],[3,2,1,"","job_id_from_submit_output"],[3,2,1,"","parse_status_output"],[3,2,1,"","process_cancel_command_output"]],"psij.executors.batch.template_function_library":[[3,7,1,"","ALL"],[3,6,1,"","walltime_to_minutes"]],"psij.executors.flux":[[2,1,1,"","FluxJobExecutor"]],"psij.executors.flux.FluxJobExecutor":[[2,2,1,"","attach"],[2,2,1,"","cancel"],[2,2,1,"","list"],[2,2,1,"","submit"]],"psij.executors.local":[[2,1,1,"","LocalJobExecutor"]],"psij.executors.local.LocalJobExecutor":[[2,2,1,"","attach"],[2,2,1,"","cancel"],[2,2,1,"","list"],[2,2,1,"","submit"]],"psij.executors.rp":[[2,1,1,"","RPJobExecutor"]],"psij.executors.rp.RPJobExecutor":[[2,2,1,"","attach"],[2,2,1,"","cancel"],[2,2,1,"","list"],[2,2,1,"","submit"]],"psij.job":[[1,1,1,"","FunctionJobStatusCallback"],[1,1,1,"","Job"],[1,1,1,"","JobStatusCallback"]],"psij.job.FunctionJobStatusCallback":[[1,2,1,"","job_status_changed"]],"psij.job.Job":[[1,2,1,"","cancel"],[1,5,1,"","id"],[1,5,1,"","native_id"],[1,2,1,"","set_job_status_callback"],[1,4,1,"","spec"],[1,5,1,"","status"],[1,2,1,"","wait"]],"psij.job.JobStatusCallback":[[1,2,1,"","job_status_changed"]],"psij.job_attributes":[[1,1,1,"","JobAttributes"]],"psij.job_attributes.JobAttributes":[[1,2,1,"","get_custom_attribute"],[1,2,1,"","set_custom_attribute"]],"psij.job_executor":[[1,1,1,"","JobExecutor"]],"psij.job_executor.JobExecutor":[[1,2,1,"","attach"],[1,2,1,"","cancel"],[1,2,1,"","get_executor_names"],[1,2,1,"","get_instance"],[1,2,1,"","list"],[1,5,1,"","name"],[1,2,1,"","register_executor"],[1,2,1,"","set_job_status_callback"],[1,2,1,"","submit"],[1,5,1,"","version"]],"psij.job_executor_config":[[1,1,1,"","JobExecutorConfig"]],"psij.job_executor_config.JobExecutorConfig":[[1,4,1,"","DEFAULT"],[1,4,1,"","DEFAULT_WORK_DIRECTORY"],[1,5,1,"","launcher_log_file"],[1,5,1,"","work_directory"]],"psij.job_launcher":[[1,1,1,"","Launcher"]],"psij.job_launcher.Launcher":[[1,4,1,"","DEFAULT_LAUNCHER_NAME"],[1,2,1,"","get_instance"],[1,2,1,"","get_launch_command"],[1,2,1,"","get_launcher_failure_message"],[1,2,1,"","is_launcher_failure"],[1,2,1,"","register_launcher"]],"psij.job_spec":[[1,1,1,"","JobSpec"]],"psij.job_spec.JobSpec":[[1,5,1,"","name"],[1,5,1,"","to_dict"]],"psij.job_state":[[1,1,1,"","JobState"],[1,1,1,"","JobStateOrder"]],"psij.job_state.JobState":[[1,4,1,"","ACTIVE"],[1,4,1,"","CANCELED"],[1,4,1,"","COMPLETED"],[1,4,1,"","FAILED"],[1,4,1,"","NEW"],[1,4,1,"","QUEUED"],[1,5,1,"","final"],[1,2,1,"","is_greater_than"]],"psij.job_state.JobStateOrder":[[1,2,1,"","prev"]],"psij.job_status":[[1,1,1,"","JobStatus"]],"psij.job_status.JobStatus":[[1,5,1,"","final"]],"psij.launcher":[[1,1,1,"","Launcher"]],"psij.launcher.Launcher":[[1,4,1,"","DEFAULT_LAUNCHER_NAME"],[1,2,1,"","get_instance"],[1,2,1,"","get_launch_command"],[1,2,1,"","get_launcher_failure_message"],[1,2,1,"","is_launcher_failure"],[1,2,1,"","register_launcher"]],"psij.launchers":[[4,1,1,"","AprunLauncher"],[4,1,1,"","JsrunLauncher"],[4,1,1,"","MPILauncher"],[4,1,1,"","MultipleLauncher"],[4,1,1,"","SingleLauncher"],[4,1,1,"","SrunLauncher"],[4,0,0,"-","aprun"],[4,0,0,"-","jsrun"],[4,0,0,"-","mpirun"],[4,0,0,"-","multiple"],[4,0,0,"-","script_based_launcher"],[5,0,0,"-","scripts"],[4,0,0,"-","single"],[4,0,0,"-","srun"]],"psij.launchers.MultipleLauncher":[[4,2,1,"","get_additional_args"]],"psij.launchers.aprun":[[4,1,1,"","AprunLauncher"]],"psij.launchers.jsrun":[[4,1,1,"","JsrunLauncher"]],"psij.launchers.mpirun":[[4,1,1,"","MPILauncher"]],"psij.launchers.multiple":[[4,1,1,"","MultipleLauncher"]],"psij.launchers.multiple.MultipleLauncher":[[4,2,1,"","get_additional_args"]],"psij.launchers.script_based_launcher":[[4,1,1,"","ScriptBasedLauncher"]],"psij.launchers.script_based_launcher.ScriptBasedLauncher":[[4,2,1,"","get_additional_args"],[4,2,1,"","get_launch_command"],[4,2,1,"","get_launcher_failure_message"],[4,2,1,"","is_launcher_failure"]],"psij.launchers.single":[[4,1,1,"","SingleLauncher"]],"psij.launchers.srun":[[4,1,1,"","SrunLauncher"]],"psij.resource_spec":[[1,1,1,"","ResourceSpec"],[1,1,1,"","ResourceSpecV1"]],"psij.resource_spec.ResourceSpec":[[1,5,1,"","version"]],"psij.resource_spec.ResourceSpecV1":[[1,5,1,"","computed_node_count"],[1,5,1,"","computed_process_count"],[1,5,1,"","computed_processes_per_node"],[1,5,1,"","version"]],"psij.serialize":[[1,1,1,"","Export"],[1,1,1,"","Import"]],"psij.serialize.Export":[[1,2,1,"","envelope"],[1,2,1,"","export"],[1,2,1,"","to_dict"]],"psij.serialize.Import":[[1,2,1,"","from_dict"],[1,2,1,"","load"]],"psij.utils":[[1,6,1,"","path_object_to_full_path"]],psij:[[1,1,1,"","Export"],[1,1,1,"","Import"],[1,3,1,"","InvalidJobException"],[1,1,1,"","Job"],[1,1,1,"","JobAttributes"],[1,1,1,"","JobExecutor"],[1,1,1,"","JobExecutorConfig"],[1,1,1,"","JobSpec"],[1,1,1,"","JobState"],[1,1,1,"","JobStatus"],[1,1,1,"","JobStatusCallback"],[1,1,1,"","Launcher"],[1,1,1,"","ResourceSpec"],[1,1,1,"","ResourceSpecV1"],[1,3,1,"","SubmitException"],[1,3,1,"","UnreachableStateException"],[1,0,0,"-","descriptor"],[1,0,0,"-","exceptions"],[2,0,0,"-","executors"],[1,0,0,"-","job"],[1,0,0,"-","job_attributes"],[1,0,0,"-","job_executor"],[1,0,0,"-","job_executor_config"],[1,0,0,"-","job_launcher"],[1,0,0,"-","job_spec"],[1,0,0,"-","job_state"],[1,0,0,"-","job_status"],[1,0,0,"-","launcher"],[4,0,0,"-","launchers"],[1,0,0,"-","resource_spec"],[1,0,0,"-","serialize"],[1,0,0,"-","utils"],[1,0,0,"-","version"]]},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","exception","Python exception"],"4":["py","attribute","Python attribute"],"5":["py","property","Python property"],"6":["py","function","Python function"],"7":["py","data","Python data"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:exception","4":"py:attribute","5":"py:property","6":"py:function","7":"py:data"},terms:{"0":[1,4,6,9,10,13],"01":[10,13],"08":10,"1":[1,3,6,9,10,13],"10":13,"128":10,"13":10,"137":10,"2":[1,3,6,9,10,13],"20211103141832":10,"2022":10,"2152":10,"2154":10,"24":10,"256":10,"265":10,"3":[1,4,6,9,11],"30":3,"39":10,"4":[1,4,6,9],"5":[1,6],"600":[1,6],"64k":13,"7":11,"9":10,"abstract":[1,3,4,6,9,10,12,13],"boolean":13,"break":10,"byte":1,"case":[1,2,3,6,10,13],"class":[1,2,3,4,9,10,12,13],"default":[1,3,4,6,9,10,13],"do":[3,10,11,13],"enum":1,"export":[1,10,13],"final":[1,6,9,10,13],"float":[1,6],"function":[1,3,6,9,10,13],"import":[1,6,9,10,11,13],"int":[1,2,3,6,10],"new":[1,2,6,7,9,10,11,13],"null":[1,4,6,9,10],"public":[3,7],"return":[1,2,3,4,6,9,10,13],"short":3,"static":[1,6,11,13],"super":10,"throw":[1,6],"transient":[1,6],"true":[1,6,13],"try":10,"while":[1,4,6,9,13],A:[1,2,3,4,5,6,8,9,11,12,13],And:13,But:13,By:[1,3,6],For:[1,3,6,9,10,13],If:[1,2,3,6,9,10,13],In:[1,3,6,9,10,11,13],It:[1,3,4,6,9,10,12],Its:[3,4,6],No:10,Not:[1,2,6],On:13,One:13,Or:[2,6],That:[1,6,9,10,11,13],The:[1,2,3,4,8,10,11,12,13],Then:10,There:[3,6,9,10],These:[2,8,9,13],To:[1,6,7,10,13],With:10,_:13,__file__:10,__init__:[9,10],__psi_j_executors__:[1,9,10],__psi_j_launchers__:[1,9],_descriptor:10,_functionjobstatuscallback:1,_plugin:9,_psi_j_job_id:4,_psi_j_launcher_don:[4,9],_psi_j_log_fil:4,_psi_j_post_launch:4,_psi_j_pre_launch:4,_qstat_command:10,_register_plugin:9,_state_map:10,a0:1,abc:[1,3,6],abil:9,abl:[9,10,13],about:[1,3,6,10,11,13],abov:[3,4,6,7,9,10,13],absenc:9,absolut:[3,10],accept:[1,6],access:[1,3,4,6,9],accord:[1,6,10],accordingli:3,account:[11,13],across:[1,6,12,13],action:3,activ:[1,6,10,11,13],actual:[2,4,6,9,10,13],ad:[6,7,8,9,12,13],add:[8,12],addit:[3,4,6,9,13],addition:9,advanc:[1,6],advantag:12,after:[1,3,4,6,9,13],again:10,against:[6,10],aggreg:9,agnost:9,aim:9,alcf:[2,3,6,10,13],all:[1,2,3,4,6,7,9,10,11,13],alloc:[1,6,9,10,13],allow:[1,4,6,9],almost:[11,13],along:10,alpha:1,alreadi:[2,3,10],also:[1,3,4,6,9,10,13],altair:13,altern:[4,6,13],alwai:[2,3,6,11,13],america:13,among:[3,6],amongst:10,amount:[1,6,13],an:[1,2,3,4,6,8,9,11,12,13],ancillari:[1,6],ani:[1,2,3,4,6,10,13],anl:10,anoth:[1,13],anywher:12,api:[12,13],appear:[2,3,6,10],applic:[1,4,6,10,12,13],appropri:3,aprun:[0,1,12,13],aprunlaunch:[4,6],ar:[1,2,3,4,5,6,9,10,11,12,13],arbitrari:13,architectur:[8,12],area:9,arg:10,argonn:[2,3,6],argument:[1,3,4,6,9,12],argv:[1,6],around:[6,9,10],art:12,ask:10,assert:10,assertionerror:10,assign:[1,6],associ:[1,6,13],assum:[1,3,6,9,10,11,13],asynchron:12,attach:[1,2,3,6,10,13],attempt:[1,3,6,9,10],attribut:[1,6,10,11,13],authent:[1,6],author:6,automat:[1,2,3,4,6,7,12],auxiliari:[1,3],avail:[1,2,6,13],backend:[1,3,6,13],bar:13,barrier:[1,6],base:[1,2,3,4,8,10,12,13],bash:[3,4,9,10],bash_escap:3,bashrc:13,basi:[2,6],basic:[10,12,13],batch:[1,2,6,8,10,12],batch_scheduler_executor:[1,2,6,10],batchschedulerexecutor:[2,3,9,10],batchschedulerexecutorconfig:[3,10],becaus:[1,2,3,6,10],becom:[1,2,6,13],been:[1,2,3,6,10,13],befor:[1,3,6,9,10,13],begin:[1,4,6],behav:[1,6],behavior:9,behaviour:10,behind:3,being:[1,3,4,5,6,9,11,13],below:[3,11,13],besid:3,beta:1,better:7,between:[1,3,4,6],beyond:10,biggest:10,bill:[1,6],bin:[1,6,10,11,13],bind:[2,6,11],bit:10,bjob:[2,3,6],bkill:[2,3,6],blob:[2,9],block:13,bodi:1,bool:[1,3,4,6],both:[1,3,4,6,9,10],bound:13,briefli:10,broad:10,broader:10,broken:9,bsub:[2,3,6],bug:7,build:[3,8,10,12],built:12,bulk:10,bunch:11,bundl:9,buri:11,busi:[11,13],c:10,calcul:1,call:[1,2,3,6,9,10,13],callabl:[1,3,6],callback:[1,6,12],can:[1,3,4,6,7,9,10,11,13],cancel:[1,2,3,6,8,9,12],cannot:[1,3,6,13],captur:4,care:[9,13],caus:[1,6],cb:[1,6],cd:[10,11],center:[12,13],certain:[1,3,6,9],chanc:[1,6],chang:[1,2,3,6,10,12,13],characterist:[1,6],chat:7,check:[2,3,7,10,13],check_status_exit_cod:[3,10],choos:11,chose:1,chosen:9,cl:[1,9,10],clean:12,clear:[1,6],client:[1,6,9,13],clone:[7,11],close:3,cloud:13,cluster:[1,6,9,13],cobalt:[1,2,4,11,12,13],cobaltexecutorconfig:[2,3,6],cobaltjobexecutor:[2,3,6],code:[1,2,3,4,6,7,9,10,11,13],collect:[2,3,10],com:[2,9,11],combin:[1,6],come:[1,6,11],command:[1,2,3,4,6,9,10,11,12,13],commandlin:10,comment:10,commmun:12,common:[10,12],commun:[1,12,13],compar:[1,6],comparison:13,complet:[1,2,3,4,6,10,11,12],complex:[11,12,13],compon:[3,9],comput:[1,6,9,10,12,13],computed_node_count:1,computed_process_count:1,computed_processes_per_nod:1,conceret:3,concret:[1,3,6,12],condit:[1,6],config:[1,2,3,4,6,9,10],configur:[1,2,3,4,6,10,12],connect:[1,3,6],consecut:3,consequ:9,consider:13,consist:[1,6,9],constrain:1,constraint:1,construct:[1,3,6,10],constructor:[1,6,9],consum:[1,6],contain:[1,2,3,4,6,9,10],content:[0,12],context:[2,3,10],contradict:13,contradictori:13,contrast:[1,6],contribut:[8,9,12,13],conveni:9,convers:1,convert:[1,3,10],cooper:3,copi:[4,6],core:[1,2,5,6,9,10,13],correct:[1,6],correctli:3,correspond:[1,2,3,4,6],could:[1,6,10,13],count:[1,13],cpu:[1,13],cpu_cores_per_process:[1,13],creat:[1,2,3,6,7,10,11,13],creation:[11,13],credenti:[1,6],current:[1,2,3,4,6,9,13],custom:[1,6,9,10],custom_attribut:[1,6,10],cycl:12,d:10,dashboard:8,data:1,databas:3,date:[1,6,11,13],datetim:[1,6],deal:10,debug:[1,6,9,13],decad:12,declar:9,def:[10,13],default_launcher_nam:1,default_work_directori:1,defect:[1,6],defin:[1,3,4,6,9,10,11,13],definit:13,delai:1,deleg:[1,3,10],depend:[1,3,6,7,11,13],deploi:[2,4,6,12],deploy:12,derefer:1,desc:1,describ:[1,3,4,6,9,10,13],descript:[1,3,6],descriptor:[0,4,6,9,10],descriptors_for_project:1,deserialis:10,design:[7,12],desir:[1,6],dest:1,destin:13,detail:[1,3,6,10,13],determin:[1,3,6],dev:[4,7,9,10],develop:[3,7,12,13],diagram:1,dict:[1,2,3,6,10],dictionari:[1,3,6,9,10,13],differ:[1,9,10,12,13],direct:[1,2,3,6],directli:[3,4,6,9,10,13],directori:[1,3,4,6,9,10,11],dirnam:4,discov:[1,9],discret:1,discuss:7,disk:9,distinguish:[3,4,13],distribut:[8,9,12],distutil:[1,10],dn:[1,6],doc:12,docstr:10,document:[8,9,10,12,13],doe:[1,2,3,4,6,9,10,11,12,13],doesn:[3,10],don:[10,13],done:[1,3,10],doubl:3,dramat:3,due:[1,3,4,6],durat:[1,6,10],dure:[1,3],dynam:[9,11,13],e:[1,3,4,6,10,11,13],each:[1,3,4,6,9,10,13],earli:1,earlier:10,easi:[9,12],easier:13,ec:[3,10],echo:10,edtb:10,effort:1,either:[1,3,4,6,9,10],element:[1,6,9],empti:[1,3,4,6,13],en:2,enabl:[1,6,9,12],enact:13,encapsul:[1,6],encod:13,encount:[4,6],encourag:[3,13],end:[1,4,6,9],enough:[9,10],ensur:[1,6,13],enter:[1,6],entir:[1,10,12],entiti:[1,4,9],entri:[2,3,9,11,13],enumer:[1,6],envelop:1,environ:[1,6,12],equival:13,err:13,errno:10,error:[1,2,3,4,6,9,10,11,13],escap:3,escape_funct:[1,2,6],essenc:6,essenti:[1,3,6],establish:12,etc:[1,3,6,9,11,13],even:[1,3,6,9,12],event:[1,2],ever:13,everi:13,ex:[6,11,13],exact:[1,6],exactli:13,exampl:[1,6,9,10,12,13],exawork:[9,11],exce:[1,6],except:[0,3,6,9,10,13],exclus:13,exclusive_node_us:[1,13],exec:[9,10],execor:1,execut:[1,3,4,6,9,10,11,13],executor:[0,1,4,8,11,12,13],execv:[1,6],exhaust:10,exist:[2,3,9,10,13],exit:[1,2,3,4,6,10],exit_cod:[1,2,3,6,10],exit_statu:10,expect:[3,9],experi:12,explan:3,extens:3,extent:6,extract:[1,3,10],f:[10,13],facil:12,fact:[1,13],factor:[1,6],fail:[1,2,3,6,10,13],failur:[1,2,3,4,6,13],fals:[1,3,6],far:10,fast:1,fatal:1,featur:[1,6,7,10,12],fed:3,feel:7,fetch:[6,13],few:[9,10],field:[1,3,6,10,13],file:[1,3,4,6,9,10,11,13],filenotfounderror:10,filesystem:1,find:[10,13],fine:13,finish:[2,3,10,11,13],fire:[1,13],first:[1,3,4,6,9,10],fix:7,flag:[1,6,13],flesh:10,flux:[0,1,12,13],fluxexecutor:2,fluxjobexecutor:[2,6],fn:1,focu:10,follow:[1,3,4,6,7,9,10,11,13],foo:13,forcefulli:[1,6],form:[1,10],format:[3,10,13],former:1,found:[3,9,11],four:4,fqn_str:1,framework:[2,6,13],free:7,from:[1,3,4,6,9,10,12,13],from_dict:1,full:[10,13],fulli:[1,9],functionjobstatuscallback:1,further:[3,10],furthermor:[1,6],g:[3,6,11,13],gener:[1,3,4,6,9,10,11,13],generate_submit_script:[2,3,9,10],get:[3,6,10,12,13],get_additional_arg:[4,6],get_cancel_command:[2,3,10],get_custom_attribut:[1,6],get_executor_nam:1,get_inst:[1,6,9,11,13],get_launch_command:[1,4],get_launcher_failure_messag:[1,4],get_status_command:[2,3,9,10],get_submit_command:[2,3,9,10],git:11,github:[2,3,7,9,11],give:10,given:[1,3,6,10,13],global:[1,9,13],go:[1,6,10],goal:9,goe:[6,9],gov:10,gpu:13,gpu_cores_per_process:[1,13],grab:[2,3],group:6,guarante:[1,6],guid:[7,12],ha:[1,2,3,6,9,10,11,12,13],handl:[1,3,6,13],hang:[1,10],happen:[10,13],happi:10,hardwar:13,hash:1,have:[1,2,3,6,7,9,10,13],haven:10,head:1,help:[3,9,10,13],helper:10,henc:3,here:[9,10,11],hh:3,high:7,hold:[1,6,8],home:[1,4,6,10],how:[1,6,8,11,12,13],howev:[1,6,9,10,13],hpc:[2,3,6,10,12,13],html:2,http:[3,9,11],human:10,i:[1,6,10],ibm:[2,3,6,13],id:[1,2,3,4,6,9,10,13],ident:[4,6],identifi:[1,6],ignor:[1,2,3,6,10],immedi:[1,6],implement:[1,2,3,4,6,7,8,9,12,13],imposs:[1,3,6],improv:9,includ:[1,2,3,4,10,13],increment:13,indefinit:[1,6],independ:[1,6,9,13],indic:[1,2,3,6],indirect:11,indirectli:13,individu:[1,13],infer:1,inform:[1,3,6,8,9,10,11,12],infrastructur:[1,3],infrequ:12,inherit:[1,3,6],inherit_environ:[1,6,10],initi:[1,2,3,4,6,10,13],initial_queue_polling_delai:3,initialis:10,input:[1,6,9,13],ins:12,insid:[1,3],instal:[6,7,9,10,12],instanc:[1,2,3,6,9,11,13],instanti:[1,3,6,9,10],instantli:3,instead:10,instruct:[1,3,6,7],integ:[1,2,3],intend:[2,4,6,8],interact:[3,10,12,13],interchang:9,interest:[1,8],interfac:[1,2,9,10],intermedi:[1,6],internet:[1,6],interpret:[1,3,6,9,10],interv:3,intial:9,invalid:[1,2,3,6],invalidjobexcept:[1,2,6,13],invalidjobstateerror:3,invoc:[1,4,6,10],invok:[1,3,4,6,9,13],io:[2,3],is_greater_than:[1,6],is_launcher_failur:[1,4],isn:10,issu:[1,6,7],iter:[2,3,9],its:[1,3,11,12,13],itself:6,j:[1,3,7,8,9,10,11],jan:10,job:[0,2,3,4,8,9,11],job_attribut:[0,6],job_executor:[0,6,10],job_executor_config:[0,6],job_id_from_submit_output:[2,3,9,10],job_launch:[0,4,6],job_report:10,job_spec:[0,6],job_stat:[0,6,10],job_statu:[0,6],job_status_1:[1,6],job_status_2:[1,6],job_status_chang:1,job_submiss:2,jobattribut:[1,6,13],jobexecutor:[1,2,3,9,10,11,12],jobexecutorconfig:[1,2,3,4,6],jobid:[2,3],jobspec:[1,3,6,11,13],jobstat:[1,6,10,11,13],jobstateord:1,jobstatu:[1,2,3,6,9,10,13],jobstatuscallback:[1,6],join:10,json:10,jsrun:[0,1,12,13],jsrunlaunch:[4,6],just:10,keep:3,keep_fil:3,kei:[3,10,13],kill:10,kind:6,know:10,known:[1,2,3,13],kwarg:10,l:10,lab:[3,6],label:[1,6],lack:10,languag:3,larg:12,lassen:[2,3,6],last:[9,13],later:[1,6,10],latest:2,latter:1,launch:[1,3,4,6,9,11,12],launch_command:[3,10],launcher:[0,3,8,12,13],launcher_lib:4,launcher_log_fil:[1,3,4],layer:11,least:[9,13],leav:9,lengthi:1,let:10,letter:10,level:[2,6,7],leverag:12,lib:[3,9],librari:[1,2,3,4,6,7,13],lifecycl:[11,13],like:[1,3,6,10,11,13],limit:[2,6],line:[4,9,10,13],link:7,linux:[2,6],list:[1,2,3,4,6,9,10,13],listen:1,littl:11,ll:10,llnl:[2,3,6,13],load:[1,3,8,10,12,13],loader:9,local:[0,1,9,10,11,12,13],localhost:13,localjobexecutor:[1,2,6],locat:[1,6],log:[1,4,9],log_fil:4,look:[10,11,13],loop:13,los_angel:13,lot:[6,10],lrm:[1,6,9],lsf:[1,2,4,11,12,13],lsfexecutorconfig:[2,3,6],lsfjobexecutor:[2,3,6],m:6,machin:[1,2,3,6,10,11,13],made:[1,3,6],mai:[1,3,4,6,7,9,13],main:[3,4,9],maintain:9,mainten:1,major:1,make:[1,7,10,13],manag:[2,3,4,6,9,10,11,12],mandatori:4,mani:[1,2,6,7,12],manipul:[2,6],map:[1,3,6,9],mark:[1,6,10,11,13],master:2,match:[1,3,6],materi:10,matter:[9,10],mayb:10,mcp:10,mean:[7,9,10,13],meant:[3,4,13],mechan:[3,6,9,10],memori:[1,6],messag:[1,3,6,9,10],metadata:[1,6],method:[1,2,3,4,6,9,10,12],might:[8,12,13],mind:13,minim:9,minor:1,minut:3,miss:[1,8,12],mkdir:10,mm:3,mode:4,model:[1,6,10,13],modern:12,modifi:[11,12,13],modul:[0,6,13],mon:10,monitor:[2,3,6,10,13],monoton:[1,6],more:[9,10,13],most:[3,6,11,12,13],mostli:9,mpi:[4,6,9,13],mpi_comm_world:13,mpi_launch:9,mpilaunch:[4,6],mpirun:[0,1,9,12,13],msg:10,much:13,multi_launch:[4,6],multipl:[0,1,9,12],multiplelaunch:[4,6],must:[1,2,3,4,6,9,10],mustac:10,mustach:[3,10],my_job_attribut:13,n:10,name:[1,3,6,9,10,13],namespac:9,nation:[3,6],nativ:[1,2,3,6,9,10],native_id:[1,2,3,6,10],native_st:10,nativeid:2,ncpu:10,nearli:[3,9],necessari:[1,3,6,10],necessarili:10,need:[1,2,3,6,10,12,13],neither:13,nersc:[2,3,6],network:[1,6],never:[1,13],newer:9,newli:[3,10],next:10,node:[1,4,6,9,13],node_count:[1,13],nomin:9,non:[1,2,3,4,6,10],none:[1,2,3,4,6,10],nonzero:3,nor:13,normal:[1,6,10],note:[7,13],noth:[1,6,10],notif:[1,2],notimplementederror:10,now:[10,12],number:[1,3,6,9,12,13],numer:3,o:[3,10],obj:1,object:[1,2,3,6,9,10,11,13],observ:13,obtain:[2,6,9,10],obviou:10,occur:[1,6,9],offer:6,often:[1,6,13],omit:10,onc:[3,6,7,11,13],one:[1,4,6,8,9,12,13],ones:[1,6,13],onli:[1,2,3,6,9,11,13],op:1,open:[3,4,6,12],oper:[1,2,6],option:[1,2,3,4,6,10],order:[1,3,4,6,9,11],org:3,orient:9,ornl:[2,3,6,13],other:[1,3,4,10,12,13],otherwis:[1,3,6,10],ouput:3,our:[7,13],out:[2,3,10,13],outlin:9,output:[1,3,4,6,9,10,13],outsid:2,outut:9,over:9,overload:3,overrid:[3,4,10],overview:12,overwrit:13,packag:[0,9,10,12],page:8,pair:13,parallel:9,param:3,paramet:[1,2,3,4,6,10],parent:10,pars:[3,9,10],parse_status_output:[2,3,9,10],part:[1,3,9,11,13],partial:[1,6],particular:[1,6,10],partit:[6,11,13],pass:[1,3,4,6,9,10,13],password:[1,6],path:[1,2,3,4,6,9,10],path_object_to_full_path:1,pathlib:10,pattern:10,pb:[3,9,10,11,12,13],pbs_jobid:10,pbs_version:10,pbsexecutor:9,pbspro:[1,2,6,10,13],pbspro_descriptor:10,pbsproexecutorconfig:[3,6,10],pbsprojobexecutor:[3,6,10],pend:4,per:[1,2,6],perform:3,period:[3,9,11,13],perlmutt:[2,3,6],perman:11,persist:[1,6],physic:13,piec:10,pilot:[2,12],pip:[7,12],place:[1,6,10],placement:13,plai:[1,6,10],pleas:[7,9,13],plu:[11,13],plug:12,plugin:6,point:[1,3,9,10],polici:[6,12],poll:[3,9],popen:[2,6],popul:[11,13],port:13,portabl:[9,13],posit:4,posix:[6,9],posixpath:[1,4,6],possibl:[1,4,6,9],post:[1,4,6,9],post_launch:[1,4,6],potenti:[1,6],practic:[1,6],pre:[1,4,6,9],pre_launch:[1,4,6],precis:6,prematur:[1,4,6],prerequisit:10,prescrib:3,present:[1,2,3,6],preserv:3,pretti:10,prev:1,prevent:[1,3,6,9],previou:[1,13],previous:[3,9],primarili:8,principl:[1,6],print:[4,13],prior:[1,6],pro:[3,6,10],probabl:12,problem:[1,6,9],process:[1,2,3,4,10],process_cancel_command_output:[2,3,10],process_count:[1,13],processes_per_nod:[1,13],produc:3,profession:13,program:6,progress:[11,13],project:[1,2,3,6,10,12,13],project_nam:[1,6,13],project_root:1,proper:[1,3,6],properli:9,properti:[1,3,6,9],provid:[1,4,6,9,10,12,13],psi:[1,3,7,8,9,10,11],psij:[0,6,9,10,11,13],psijpb:10,pull:[7,10],purg:3,purpos:[1,3,6],pwd:10,py:[1,2,9,10],pypi:3,pystach:3,pytest:10,python:[1,2,3,4,6,7,9,10,11,13],pythonpath:[9,10],q:10,qdel:[2,3,6,10],qstat:[2,3,6,10],qsub:[2,3,6,10],qualifi:[1,9],qualiti:6,queri:[3,9],question:7,queu:[1,3,6,10,11,13],queue:[1,3,6,11,13],queue_nam:[1,6,13],queue_polling_error_threshold:3,queue_polling_interv:3,quick:3,quickli:[1,3],quot:3,r:[7,10],radic:[2,12],rais:[1,2,3,6,9,10,13],rang:[10,13],rank:[1,6,9],rather:[1,4,6,7,10,13],re:[1,6,10],reach:[1,6,10,13],read:[1,3,6,9,10,13],readabl:10,readili:9,readm:7,readthedoc:2,realli:13,reason:[1,2,3,6],receiv:1,recommend:[1,4,6],reconstruct:1,record:[2,3,7],redirect:[3,4,9,10,13],reduc:[3,11],ref:[1,6],refer:[2,9,10,12,13],referenc:1,reflect:[1,3],regardless:[2,6],regist:[1,3,4,6,9],register_executor:1,register_launch:[1,4],registr:1,regularli:3,rel:[1,6],relat:[6,10],relev:9,remain:[1,4],remot:[1,6],remov:[1,6,9,10],render:3,repeat:10,replac:10,repo:[7,10],report:[1,2,3,7,9,10],repres:[1,2,3,6,9,10,11,13],represent:[1,3,6],request:[1,7,10,12,13],requir:[1,2,6,7,9,12,13],reserv:[1,6],reservation_id:[1,6],resolut:[1,6],resourc:[1,2,3,6,9,10,11,12],resource_spec:[0,6,13],resourcespec:[1,3,6,13],resourcespecv1:[1,13],respect:[1,2,3,4,6,13],respons:[1,6,13],restrict:[3,9],result:[1,3,7,9,12],retriev:[1,3,6],reveal:10,rfc:2,right:10,rm:13,role:[1,6],roll:12,root:1,rp:[0,1,6],rpjobexecutor:[2,6],rst:2,run:[1,2,3,4,6,8,9,10,11,12,13],runner:[1,4,6],runtim:13,runtimeerror:3,s:[1,2,3,4,6,7,8,9,11,12,13],same:[1,3,6,9,10,11,13],satisfi:1,save:4,sbatch:[2,3,6],scale:12,scancel:[2,3,6],schedul:[2,3,6,7,8,10,12],scienc:13,scientist:12,script:[1,2,3,4,6,8,10,12],script_based_launch:[0,1,6],script_dir:[3,10],script_gener:[1,2,6,10],script_path:[4,6],scriptbasedlaunch:[4,9],second:[1,3,6],secondari:9,section:[6,9,13],see:[1,2,3,4,6,7,9,10,11,13],seem:[2,3,10],seen:[1,6],select:13,self:10,send:[1,6,12],sens:10,sent:[1,6],sequenc:[1,6,9],sequenti:9,serial:[0,6],servic:[1,6],set:[1,2,3,4,6,13],set_custom_attribut:[1,6],set_job_status_callback:[1,6,13],setup:10,sh:[4,6,9],share:[1,3,10,12,13],shell:13,should:[1,2,3,4,6,9,10,11,13],show:11,shown:10,side:[1,6,9],sierra:[2,3,6],signal:[3,4,10],signatur:3,signific:1,similar:12,simpl:[4,9,10,11,13],simpli:3,simplifi:13,simul:13,sinc:[1,3,6,9,11,13],singl:[0,1,10,12,13],singlelaunch:[4,6],singleton:1,site:[2,6,11],situat:13,skeleton:10,slack:7,slate:[2,6],sleep:13,slurm:[1,2,4,10,11,12,13],slurmexecutorconfig:[2,3,6],slurmjobexecutor:[2,3,6],so:[1,3,6,10,13],softwar:12,solut:9,some:[1,3,6,10],someth:[1,10,11,13],soon:[1,11,13],sought:3,sourc:[1,2,3,4,6,10,12],space:12,spec:[1,2,6,10,13],spec_21:2,special:9,specif:[1,2,3,6,9,10,11,12,13],specifi:[1,2,3,4,6,10,13],spectrum:[2,3,6,13],split:[6,9],squeue:[2,3,6],src:[1,2,4,6,9,10,12],srun:[0,1,9,12,13],srunlaunch:[4,6],ss:3,stack:12,stand:1,standard:[1,6,9,13],start:[1,2,4,6,9,12,13],stat:[2,3],state:[1,2,3,6,9,10,12],statement:13,statrt:2,statu:[1,2,3,6,8,9,12],stderr:[1,4,9],stderr_path:[1,6,13],stdin:9,stdin_path:[1,6,13],stdio:12,stdout:[1,4,9,10],stdout_path:[1,6,13],step:[9,10],still:10,store:[3,5,9],str:[1,2,3,4,6,10,13],straightforward:10,stream:[1,6,9,13],stress:13,strict:[1,6],strictvers:[1,10],string:[1,3,4,6,9,13],strip:10,strongli:[3,6],structur:[3,10],stub:[8,12],stuff:10,style:[7,10],subclass:[1,3,4,6,9,10],submiss:[1,2,3,6,8,9],submit:[1,2,3,4,6,9,10,11,12],submit_fil:[2,3,10],submit_file_path:[2,3,10],submitexcept:[1,2,3,6],submitscriptgener:3,submodul:[0,6],subpackag:[0,6],subprocess:[2,6],subsequ:[1,3,6],substitut:3,subtl:12,succe:[4,6],success:[1,2,4,6,9],successfulli:[1,3,6,13],suffic:13,suffici:[1,6],suggest:[1,6],suit:[7,10,13],summit:[2,3,6,13],superclass:9,supercomput:12,suppli:10,support:[1,6,12,13],suppress:10,sure:[10,13],synchron:1,system:[1,2,3,6,8,10,12,13],t:[3,10,13],tab:[11,13],tabular:10,take:[3,9,13],taken:[3,4,10],tame:12,target:[9,11,13],target_st:[1,6],target_typ:1,task:2,team:12,tell:[10,11,13],tempat:10,templat:[3,10],template_function_librari:[1,2,6],template_path:3,templatedscriptgener:[3,10],temporari:[1,6],tend:11,term:13,termin:[1,6,9,13],terminolog:[11,12],test:[3,8,10,11,12,13],test_cancel:10,test_executor:10,test_simple_job:10,text:10,textio:[2,3,10],than:[1,4,6,7,10,13],thei:[1,4,9,10,11,13],them:[3,4,9,13],theori:9,therefor:[1,6],therein:9,theta:13,thi:[1,2,3,4,6,9,10,12,13],thing:10,think:[10,13],thoroughli:9,those:[6,8,9,10],though:[1,6,10],thread:[1,3,6,9,13],three:[6,10],through:[1,2,3,4,6,9,11,13],thrown:[1,2,6],thu:13,ti:10,time:[1,3,4,6,10,11,13],timedelta:[1,3,6],timeout:[1,6],timer:7,timestamp:4,tmp:13,to_dict:[1,6],todo:1,togeth:3,tool:[4,6,9,13],topic:9,total:13,transcrib:10,transit:[1,2,6],translat:[12,13],tree:[1,6],tri:[1,6],trigger:[1,6,11,13],troubleshoot:9,tutori:[9,10],two:[1,3,6,9,10],txt:7,type:[1,2,3,4,6,7,10,11,13],typeerror:10,typic:[3,9],typo:7,tz:13,u:13,ugli:10,ultim:1,unabl:9,unchang:1,under:[1,2,6,11],underli:[1,2,3,6,9,11,13],understand:10,understood:[1,3],unifi:12,union:[1,3,6],uniqu:[1,6],unless:9,unlik:[1,6],unnecessari:[2,3],unreachablestateexcept:[1,6],unsuccessfulli:[1,6],until:[1,6],up:[1,4,6,10,11,13],updat:[1,3,9,10,13],upon:2,upset:10,url:[1,2,3,6,10],us:[1,2,3,4,6,7,9,10,11,12,13],usag:12,user:[1,2,3,6,9,12],usernam:[1,6],usual:[10,13],utc:13,util:[0,6],v1:1,v:10,valid:[1,2,6,13],valu:[1,3,6,9,10,11,13],valueerror:1,vari:6,variabl:[1,4,6,9,11,13],varieti:[2,3,6],variou:[1,6,13],veri:[3,10,11],verif:10,version:[0,6,9,10],version_constraint:1,version_str:1,via:[2,6,10,11,13],view:[9,10],violat:[1,6],virtual:[12,13],wa:[1,2,3,6,9,10,12,13],wai:[1,6,10,11,13],wait:[1,3,6,12],walltim:[1,3,6,10],walltime_to_minut:3,want:[1,8,9,11,12,13],we:[10,11,12,13],websit:8,welcom:7,well:[1,2,3,4,6,9,10,13],were:[1,13],what:[6,8,12],whatev:10,when:[1,2,3,4,6,9,10,11,13],whenev:[1,6,10,13],where:[1,3,4,9,10],whether:[1,3,7],wheverev:10,which:[1,3,4,5,6,9,10,11,13],who:[7,9,12],whose:[1,3,6],why:[8,12],wide:[2,3,6],wish:7,without:[1,3,6,10,13],won:10,word:[1,6],work:[1,3,4,6,9,10,11,13],work_directori:[1,3],workflow:[9,12],workload:[2,3,4,6],would:[1,6,13],wrap:[1,3,4],wrapper:[6,9],write:[7,9,10,13],written:[1,3],x:10,yet:[1,6,10],you:[4,6,7,8,11,12,13],your:[7,8,11,12],zero:[1,2,3,4,6,10]},titles:["src","psij package","psij.executors package","psij.executors.batch package","psij.launchers package","psij.launchers.scripts package","The PSI/J API","Contributing","Developer Docs","Architecture","Adding an executor","Getting Started","Portable Submission Interface for Jobs (PSI/J) - Python Library","User Guide"],titleterms:{"class":6,A:10,The:[6,7,9],ad:10,add:10,an:10,api:6,aprun:[4,6],architectur:9,argument:13,base:[6,9],basic:11,batch:[3,9],batch_scheduler_executor:3,build:7,callback:13,cancel:[10,13],cobalt:[3,6],complet:13,configur:13,content:[1,2,3,4,5,6],contribut:7,dashboard:7,descriptor:1,develop:8,distribut:10,doc:8,document:7,environ:13,escape_funct:3,exampl:11,except:1,executor:[2,3,6,9,10],flux:[2,6],from:11,get:11,guid:13,how:[7,10],implement:10,inform:13,instal:11,interfac:12,its:6,j:[6,12,13],job:[1,6,10,12,13],job_attribut:1,job_executor:1,job_executor_config:1,job_launch:1,job_spec:1,job_stat:1,job_statu:1,jobexecutor:[6,13],jsrun:[4,6],launch:13,launcher:[1,4,5,6,9],librari:12,load:9,local:[2,6],lsf:[3,6],manag:13,method:13,might:10,miss:10,modifi:6,modul:[1,2,3,4,5],mpirun:[4,6],multipl:[4,6,13],one:10,other:6,overview:11,packag:[1,2,3,4,5,6],pb:6,pbspro:3,pilot:6,pip:11,portabl:12,probabl:13,process:13,psi:[6,12,13],psij:[1,2,3,4,5],python:12,radic:6,rank:13,refer:6,requir:11,resourc:13,resource_spec:1,rp:2,run:7,s:10,schedul:[9,13],script:[5,9],script_based_launch:4,script_gener:3,serial:1,singl:[4,6],slurm:[3,6],sourc:11,src:0,srun:[4,6],start:11,state:13,statu:[10,13],stdio:13,stub:10,submiss:[10,12],submit:13,submodul:[1,2,3,4],subpackag:[1,2,4],system:9,template_function_librari:3,terminolog:13,test:7,usag:11,user:13,util:1,version:1,versu:13,wait:13,want:10,websit:7,what:[10,13],who:13,why:10,you:10,your:[10,13]}})