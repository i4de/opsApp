declare namespace API {
  type AddCheckItemReq = {
    /** 检查项名称 */
    name?: string;
    /** 检查项描述 */
    desc?: string;
    /** 类型 */
    type?: string;
    /** 内容 */
    content?: string;
    /** 脚本超时时间 */
    waitTime?: number;
    /** 脚本解释器 */
    cmd?: string;
    weight?: number;
  };

  type CheckItemRes = {
    /** 检查项id */
    checkItemId?: string;
    /** 检查项名称 */
    name?: string;
    /** 检查项描述 */
    desc?: string;
    /** 类型 */
    type?: string;
    /** 内容 */
    content?: string;
    /** 脚本超时时间 */
    waitTime?: number;
    /** 脚本解释器 */
    cmd?: string;
    weight?: number;
  };

  type interface = {};

  type DeleteCheckItemReq = {
    /** 检查项id列表 */
    checkItemIds?: string[];
  };

  type DeleteRes = {};

  type QueryCheckItemReq = {
    /** 检查项id */
    checkItemId?: string;
    /** 检查项名称 */
    name?: string;
    /** 类型 */
    type?: string;
    /** 第几页 */
    pageNum?: number;
    /** 每页的数量 */
    pageSize?: number;
  };

  type QueryCheckItemRes = {
    /** 总数 */
    total?: number;
    /** 第几页 */
    pageNum?: number;
    /** 每页的数量 */
    pageSize?: number;
    /** 总共多少页 */
    pageTotal?: number;
    list?: CheckItemRes[];
  };

  type UpdateCheckItemReq = {
    /** 检查项id */
    checkItemId?: string;
    /** 检查项名称 */
    name?: string;
    /** 检查项描述 */
    desc?: string;
    /** 类型 */
    type?: string;
    /** 内容 */
    content?: string;
    /** 脚本超时时间 */
    waitTime?: number;
    /** 脚本解释器 */
    cmd?: string;
    weight?: number;
  };

  type AddAgentReq = {
    list?: AgentInfo[];
  };

  type AgentInfo = {
    /** 节点id, 空表示默认版本,所有节点将使用这个版本 */
    peerid?: string;
    /** agent 名称 */
    name?: string;
    /** agent 版本 */
    version?: string;
    /** 期望状态 running,stopped,deleted */
    expectedStatus?: string;
    /** 下载地址 */
    downloadUrl?: string;
    /** agent 当前状态 */
    status?: string;
    /** 是否默认安装 0-否  1-是 */
    isDefault?: number;
    /** agent 启动超时时间 */
    timeout?: number;
  };

  type AgentInfoRes = {
    list?: AgentInfo[];
  };

  type QueryAgentStatusReq = {
    list?: QueryAgentStatus[];
  };

  type QueryAgentStatus = {
    /** 节点id */
    peerid?: string;
    /** 需要查询的agent名称列表 */
    agents?: string[];
  };

  type QueryAgentStatusRes = {
    List?: PeerAgentStatus[];
  };

  type PeerAgentStatus = {
    /** 节点id */
    peerid?: string;
    Agents?: AgentInfo[];
  };

  type UpdateAgentReq = {
    list?: AgentInfo[];
  };

  type DownloadFileReq = {
    /** 任务名称 */
    name?: string;
    /** 创建人 */
    creater?: string;
    /** 节点列表 */
    peers?: string[];
    files?: DownloadFileInfo[];
  };

  type DownloadFileInfo = {
    /** 文件名称 */
    filename?: string;
    /** 文件的下载url地址 */
    address?: string;
    /** 文件的保存路径 */
    path?: string;
    /** 是否自动创建文件夹 */
    auto_create_path?: boolean;
    /** 如果文件已经存在,是否替换文件 */
    replace?: boolean;
  };

  type DownloadfileRes = {
    /** 任务id */
    taskid?: string;
    /** 状态（doing, failed, done） */
    status?: string;
    /** 任务列表详情 */
    list?: DownloadfileItem[];
  };

  type DownloadfileItem = {
    status?: string;
    /** 节点id */
    peerid?: string;
    /** 任务id */
    jobid?: string;
    /** 文件名 */
    filename?: string;
    /** 代码 */
    code?: string;
    msg?: string;
  };

  type DownloadFileDetailsReq = {
    taskid?: string;
  };

  type NodeConnectReq = {
    /** 节点id */
    nodeid?: string;
    /** 远程节点连接地址 */
    remoteAddr?: string;
  };

  type NodeOpRes = {
    msg?: string;
  };

  type NodeFileListReq = {
    nodeid?: string;
    /** 路径 */
    path?: string;
  };

  type NodeFileListRes = {
    files?: FileInfo[];
  };

  type FileInfo = {
    /** 文件名称 */
    name?: string;
    /** 文件类型, dir 表示文件夹 */
    type?: string;
    /** 大小 */
    size?: number;
    /** 路径 */
    path?: string;
    /** 修改时间 */
    mtime?: string;
  };

  type NodeFileCreateDirReq = {
    nodeid?: string;
    /** 文件夹路径 */
    path?: string;
  };

  type NodeFileDeleteReq = {
    nodeid?: string;
    /** 文件夹(文件)路径 */
    path?: string;
  };

  type NodeFileMoveReq = {
    nodeid?: string;
    /** 源文件夹(文件)路径 */
    src?: string;
    /** 目标文件夹(文件)路径 */
    dst?: string;
  };

  type NodeStatReq = {
    nodeid?: string;
  };

  type NodeStatRes = {
    PeerId?: string;
    HostInfo?: InfoStat;
    Swapmem?: SwapMemoryStat;
    Mem?: VirtualMemoryStat;
    CpuInfo?: InfoStat[];
    DiskUseInfo?: UsageStat;
    Interfaces?: InterfaceStat[];
  };

  type InfoStat = {
    hostname?: string;
    uptime?: number;
    bootTime?: number;
    procs?: number;
    os?: string;
    platform?: string;
    platformFamily?: string;
    platformVersion?: string;
    kernelVersion?: string;
    kernelArch?: string;
    virtualizationSystem?: string;
    virtualizationRole?: string;
    hostId?: string;
  };

  type SwapMemoryStat = {
    total?: number;
    used?: number;
    free?: number;
    usedPercent?: number;
    sin?: number;
    sout?: number;
    pgIn?: number;
    pgOut?: number;
    pgFault?: number;
    pgMajFault?: number;
  };

  type VirtualMemoryStat = {
    total?: number;
    available?: number;
    used?: number;
    usedPercent?: number;
    free?: number;
    active?: number;
    inactive?: number;
    wired?: number;
    laundry?: number;
    buffers?: number;
    cached?: number;
    writeBack?: number;
    dirty?: number;
    writeBackTmp?: number;
    shared?: number;
    slab?: number;
    sreclaimable?: number;
    sunreclaim?: number;
    pageTables?: number;
    swapCached?: number;
    commitLimit?: number;
    committedAS?: number;
    highTotal?: number;
    highFree?: number;
    lowTotal?: number;
    lowFree?: number;
    swapTotal?: number;
    swapFree?: number;
    mapped?: number;
    vmallocTotal?: number;
    vmallocUsed?: number;
    vmallocChunk?: number;
    hugePagesTotal?: number;
    hugePagesFree?: number;
    hugePageSize?: number;
  };

  type InfoStat = {
    cpu?: number;
    vendorId?: string;
    family?: string;
    model?: string;
    stepping?: number;
    physicalId?: string;
    coreId?: string;
    cores?: number;
    modelName?: string;
    mhz?: number;
    cacheSize?: number;
    flags?: string[];
    microcode?: string;
  };

  type UsageStat = {
    path?: string;
    fstype?: string;
    total?: number;
    free?: number;
    used?: number;
    usedPercent?: number;
    inodesTotal?: number;
    inodesUsed?: number;
    inodesFree?: number;
    inodesUsedPercent?: number;
  };

  type InterfaceStat = {
    index?: number;
    mtu?: number;
    name?: string;
    hardwareAddr?: string;
    flags?: string[];
    addrs?: InterfaceAddr[];
  };

  type InterfaceAddr = {
    addr?: string;
  };

  type NodeStopReq = {
    nodeid?: string;
    remoteId?: string;
  };

  type NodeReq = {
    /** 节点id,空表示当前节点 */
    nodeid?: string;
  };

  type NodeRes = {
    /** 节点列表 */
    Nodes?: Node[];
  };

  type Node = {
    id?: string;
    addr?: string;
    name?: string;
    type?: string;
    data?: string;
  };

  type ScriptTaskReq = {
    /** 脚本任务名 */
    name?: string;
    /** 创建者 */
    creater?: string;
    /** 节点id列表 */
    peers?: string[];
    content?: Script;
  };

  type Script = {
    /** 脚本工作路径 */
    path?: string;
    /** 解释器 */
    cmd?: string;
    /** 环境变量 */
    env?: Record<string, any>;
    /** 脚本内容 */
    content?: string;
    /** 脚本执行方式,0-命令行执行(适合简单命令) 1-内容执行(脚本内容会保存到一个文件下进行运行) 2-脚本名执行,脚本存在本机上, 3-从服务器上下载脚本执行, 脚本放在服务器上 */
    execWay?: number;
    filehash?: string;
    /** 脚本执行的用户 */
    user?: string;
    /** 脚本执行的超时时间 */
    timeout?: number;
    /** 脚本需要传入的参数 */
    args?: string[];
    /** 脚本通过stdin输入内容 */
    input?: string;
  };

  type ScriptTaskRes = {
    /** 任务id */
    taskid?: string;
  };

  type ScriptTaskCancelReq = {
    tasks?: ScriptTaskCancel[];
  };

  type ScriptTaskCancel = {
    /** 节点id */
    peerid?: string;
    /** 任务id */
    jobid?: string;
    msg?: string;
  };

  type ScriptTaskCancelRes = {
    list?: ScriptTaskCancel[];
  };

  type PeerScriptTaskInfoReq = {
    /** 节点id */
    peerid?: string;
    /** 任务id */
    taskid?: string;
  };

  type ScriptTaskInfoRes = {
    peerid?: string;
    req?: interface;
    status?: string;
    value?: interface;
    err?: string;
  };

  type ScriptTaskSyncReq = {
    /** 脚本任务名 */
    name?: string;
    /** 创建者 */
    creater?: string;
    /** 节点id列表 */
    peers?: string[];
    content?: Script;
  };

  type ScriptTaskExecRes = {
    /** 任务id */
    taskid?: string;
    status?: string;
    list?: ScriptTaskExecItem[];
  };

  type ScriptTaskExecItem = {
    jobid?: string;
    peerId?: string;
    resCmd?: ResCmd;
    status?: string;
  };

  type ResCmd = {
    stdout?: string;
    stderr?: string;
    code?: string;
    err?: string;
    exitCode?: number;
    res?: string;
  };

  type ScriptTaskInfoReq = {
    taskid?: string;
  };

  type CurrentUserInfoReq = {};

  type UserInfoRes = {
    /** uid */
    uid?: string;
    /** username */
    username?: string;
    email?: string;
    phone?: string;
    avatar?: string;
  };

  type AuthLoginReq = {
    /** username */
    username?: string;
    passwd?: string;
  };

  type AuthLoginRes = {
    token?: string;
    expire?: string;
  };

  type AuthLogoutReq = {};

  type AuthLogoutRes = {};

  type AuthRefreshTokenReq = {};

  type AuthRefreshTokenRes = {
    token?: string;
    expire?: string;
  };

  type AddAppReq = {
    /** 应用名 */
    name?: string;
    /** 拥有者 */
    owner?: string;
  };

  type AddAppRes = {
    /** appid */
    appid?: string;
    apiKey?: string;
    secKey?: string;
    /** 拥有者 */
    owner?: string;
    /** 应用名 */
    name?: string;
    /** 状态 1启用 0 禁用 */
    status?: number;
    /** 拥有者uid */
    ownerUid?: string;
  };

  type DeleteAppReq = {
    /** app id 列表 */
    appids?: string[];
  };

  type QueryAppReq = {
    /** 应用名 */
    name?: string;
    /** 拥有者 */
    owner?: string;
    /** 第几页 */
    pageNum?: number;
    /** 每页的数量 */
    pageSize?: number;
  };

  type QueryAppRes = {
    /** 总数 */
    total?: number;
    /** 第几页 */
    pageNum?: number;
    /** 每页的数量 */
    pageSize?: number;
    /** 总共多少页 */
    pageTotal?: number;
    list?: App[];
  };

  type App = {
    id?: number;
    appid?: string;
    apiKey?: string;
    secKey?: string;
    owner?: string;
    name?: string;
    status?: number;
    ownerUid?: string;
    createdAt?: string;
    updatedAt?: string;
  };

  type QuerySingleAppReq = {
    /** appid */
    appid?: string;
  };

  type UpdateAppReq = {
    /** appid */
    appid?: string;
    /** 应用名 */
    name?: string;
    /** 拥有者 */
    owner?: string;
    /** 状态 1启用 0 禁用 */
    status?: number;
  };

  type AddPluginReq = {
    /** 插件名 */
    name?: string;
    /** 包名 */
    packageName?: string;
    /** 操作系统 */
    os?: string;
    /** 架构 */
    arch?: string;
    /** 包md5名称 */
    md5?: string;
    /** 创建人 */
    creater?: string;
  };

  type PluginItemRes = {
    /** 插件uuid */
    uuid?: string;
    /** 插件名 */
    name?: string;
    /** 包名 */
    packageName?: string;
    /** 操作系统 */
    os?: string;
    /** 架构 */
    arch?: string;
    /** 包md5名称 */
    md5?: string;
    /** 创建人 */
    creater?: string;
    /** 更新人 */
    updater?: string;
    /** 创建时间 */
    created?: string;
    /** 更新时间 */
    updated?: string;
  };

  type DeletePluginReq = {
    /** 插件uuid列表 */
    uuids?: string[];
  };

  type QueryPluginReq = {
    /** 第几页 */
    pageNum?: number;
    /** 每页的数量 */
    pageSize?: number;
    /** 插件uuid */
    uuid?: string;
    /** 插件名 */
    name?: string;
    /** 包名 */
    packageName?: string;
    /** 操作系统 */
    os?: string;
    /** 架构 */
    arch?: string;
    /** 包md5名称 */
    md5?: string;
    /** 创建人 */
    creater?: string;
    /** 更新人 */
    updater?: string;
    /** 创建时间 */
    created?: string;
    /** 更新时间 */
    updated?: string;
  };

  type QueryPluginRes = {
    /** 总数 */
    total?: number;
    /** 第几页 */
    pageNum?: number;
    /** 每页的数量 */
    pageSize?: number;
    /** 总共多少页 */
    pageTotal?: number;
    list?: Plugin[];
  };

  type Plugin = {
    id?: number;
    uuid?: string;
    name?: string;
    packageName?: string;
    os?: string;
    arch?: string;
    md5?: string;
    creater?: string;
    updater?: string;
    created?: string;
    updated?: string;
  };

  type UpdatePluginReq = {
    /** 插件uuid */
    uuid?: string;
    /** 插件名 */
    name?: string;
    /** 包名 */
    packageName?: string;
    /** 操作系统 */
    os?: string;
    /** 架构 */
    arch?: string;
    /** 包md5名称 */
    md5?: string;
    /** 创建人 */
    creater?: string;
    /** 更新人 */
    updater?: string;
    /** 创建时间 */
    created?: string;
    /** 更新时间 */
    updated?: string;
  };

  type AddScriptReq = {
    /** 脚本名称 */
    name?: string;
    /** 脚本内容 */
    content?: string;
    /** 参数信息 */
    args?: KVString[];
    /** 描述信息 */
    desc?: string;
    /** 脚本类型shell或者powershell */
    type?: string;
    /** 创建人 */
    creater?: string;
    /** 脚本超时时间 */
    waitTime?: number;
    /** 脚本解释器 */
    cmd?: string;
  };

  type KVString = {
    key?: string;
    value?: string;
    desc?: string;
  };

  type ScriptItemRes = {
    /** 脚本id */
    scriptId?: string;
    /** 脚本名称 */
    name?: string;
    /** 脚本内容 */
    content?: string;
    /** 参数信息 */
    args?: KVString[];
    /** 描述信息 */
    desc?: string;
    /** 脚本类型shell或者powershell */
    type?: string;
    /** 创建人 */
    creater?: string;
    /** 更新人 */
    updater?: string;
    /** 脚本超时时间 */
    waitTime?: number;
    /** 脚本解释器 */
    cmd?: string;
  };

  type DeleteScriptReq = {
    /** 脚本id 列表 */
    scriptIds?: string[];
  };

  type DeleteScriptRes = {};

  type ScriptQueryReq = {
    /** 脚本名称 */
    name?: string;
    /** 脚本类型shell或者powershell */
    type?: string;
    /** 脚本id */
    scriptId?: string;
    /** 第几页 */
    pageNum?: number;
    /** 每页的数量 */
    pageSize?: number;
  };

  type ScriptInfoRes = {
    /** 总数 */
    total?: number;
    /** 第几页 */
    pageNum?: number;
    /** 每页的数量 */
    pageSize?: number;
    /** 总共多少页 */
    pageTotal?: number;
    list?: Script[];
  };

  type Script = {
    id?: number;
    name?: string;
    content?: string;
    args?: string;
    desc?: string;
    type?: string;
    ownerType?: string;
    ownerUid?: string;
    created?: string;
    updated?: string;
    scriptUid?: string;
    waitTime?: number;
    cmd?: string;
  };

  type UpdateScriptReq = {
    /** 脚本id */
    scriptId?: string;
    /** 脚本名称 */
    name?: string;
    /** 脚本内容 */
    content?: string;
    /** 参数信息 */
    args?: KVString[];
    /** 描述信息 */
    desc?: string;
    /** 脚本类型shell或者powershell */
    type?: string;
    /** 更新人 */
    updater?: string;
    /** 脚本超时时间 */
    waitTime?: number;
    /** 脚本解释器 */
    cmd?: string;
  };

  type AddCronTaskReq = {
    /** 任务名称 */
    name?: string;
    /** 任务类型 */
    type?: string;
    /** 创建人 */
    creater?: string;
    /** 定时任务内容 */
    content?: string;
    /** 定时任务表达式 */
    cronExpr?: string;
    /** 定时任务状态 */
    status?: string;
  };

  type CronTaskItemRes = {
    /** 任务名称 */
    name?: string;
    /** 任务类型 */
    type?: string;
    /** 创建人 */
    creater?: string;
    /** 定时任务内容 */
    content?: string;
    /** 定时任务表达式 */
    cronExpr?: string;
    /** 定时任务状态 */
    status?: string;
    /** 创建时间 */
    created?: string;
    /** 定时任务唯一id */
    cronUid?: string;
    /** 最后运行时间 */
    lastRunTime?: string;
    /** 下次运行时间 */
    nextRunTime?: string;
    /** 更新时间 */
    updated?: string;
    /** 更新人 */
    updater?: string;
  };

  type DeleteCronTaskReq = {
    /** 定时任务唯一id列表 */
    cronUids?: string[];
  };

  type DeleteTaskPresetRes = {
    message?: string;
  };

  type QueryCronTaskReq = {
    /** 定时任务唯一id */
    cronUid?: string;
    /** 任务名称 */
    name?: string;
    /** 任务类型 */
    type?: string;
    /** 创建人 */
    creater?: string;
    /** 第几页 */
    pageNum?: number;
    /** 每页的数量 */
    pageSize?: number;
  };

  type QueryCronTaskRes = {
    /** 总数 */
    total?: number;
    /** 第几页 */
    pageNum?: number;
    /** 每页的数量 */
    pageSize?: number;
    /** 总共多少页 */
    pageTotal?: number;
    list?: CronTaskItemRes[];
  };

  type StartCronTaskReq = {
    /** 定时任务唯一id */
    cronUid?: string;
  };

  type CronTaskOpRes = {};

  type StopCronTaskReq = {
    /** 定时任务唯一id */
    cronUid?: string;
  };

  type UpdateCronTaskReq = {
    /** 任务名称 */
    name?: string;
    /** 任务类型 */
    type?: string;
    /** 更新人 */
    updater?: string;
    /** 定时任务内容 */
    content?: string;
    /** 定时任务表达式 */
    cronExpr?: string;
    /** 定时任务状态 */
    status?: string;
    /** 定时任务唯一id */
    cronUid?: string;
  };

  type TaskInfoReq = {
    /** 任务id */
    taskid?: string;
  };

  type TaskDetailRes = {
    task?: Task;
    /** 子任务详情 */
    sublist?: TaskInfo[];
  };

  type Task = {
    id?: number;
    taskId?: string;
    type?: string;
    content?: string;
    name?: string;
    reqid?: string;
    parentId?: string;
    status?: string;
    created?: string;
    updated?: string;
    creater?: string;
  };

  type TaskInfo = {
    task?: Task;
    /** 子任务详情 */
    sublist?: TaskInfo[];
  };

  type AddTaskPresetReq = {
    /** 任务类型 */
    type?: string;
    /** 任务名 */
    name?: string;
    /** 创建人 */
    creater?: string;
    /** 预设任务内容 */
    content?: string;
  };

  type TaskPresetItemRes = {
    /** 预设任务uuid */
    uuid?: string;
    /** 任务类型 */
    type?: string;
    /** 任务名 */
    name?: string;
    /** 创建人 */
    creater?: string;
    /** 预设任务内容 */
    content?: string;
    /** 创建时间 */
    created?: string;
    /** 更新时间 */
    updated?: string;
    /** 更新人 */
    updater?: string;
  };

  type DeleteTaskPresetReq = {
    /** 预设任务uuid列表 */
    uuids?: string[];
  };

  type QueryTaskPresetReq = {
    /** 预设任务uuid */
    uuid?: string;
    /** 任务名 */
    name?: string;
    /** 创建人 */
    creater?: string;
    /** 第几页 */
    pageNum?: number;
    /** 每页的数量 */
    pageSize?: number;
  };

  type QueryTaskPresetRes = {
    /** 总数 */
    total?: number;
    /** 第几页 */
    pageNum?: number;
    /** 每页的数量 */
    pageSize?: number;
    /** 总共多少页 */
    pageTotal?: number;
    list?: TaskPresetItemRes[];
  };

  type UpdateTaskPresetReq = {
    /** 预设任务uuid */
    uuid?: string;
    /** 任务类型 */
    type?: string;
    /** 任务名 */
    name?: string;
    /** 更新人 */
    updater?: string;
    /** 预设任务内容 */
    content?: string;
  };

  type TaskQueryReq = {
    /** 任务名 */
    name?: string;
    /** 创建人 */
    creater?: string;
    /** 任务id */
    taskid?: string;
    /** 第几页 */
    pageNum?: number;
    /** 每页的数量 */
    pageSize?: number;
  };

  type TaskInfoRes = {
    /** 总数 */
    total?: number;
    /** 第几页 */
    pageNum?: number;
    /** 每页的数量 */
    pageSize?: number;
    /** 总共多少页 */
    pageTotal?: number;
    list?: Task[];
  };

  type AddVmReq = {
    name?: string;
    /** 主机hostname */
    hostname?: string;
    publicIp?: string;
    uuid?: string;
    os?: string;
    creater?: string;
  };

  type VmItemRes = {
    peerId?: string;
    name?: string;
    /** 主机hostname */
    hostname?: string;
    publicIp?: string;
    uuid?: string;
    os?: string;
    creater?: string;
    updater?: string;
  };

  type DeleteVmReq = {
    uuids?: string;
  };

  type QueryVmReq = {
    name?: string;
    uuid?: string;
    hostname?: string;
    peerId?: string;
    /** 第几页 */
    pageNum?: number;
    /** 每页的数量 */
    pageSize?: number;
  };

  type QueryVmRes = {
    /** 总数 */
    total?: number;
    /** 第几页 */
    pageNum?: number;
    /** 每页的数量 */
    pageSize?: number;
    /** 总共多少页 */
    pageTotal?: number;
    list?: Vm[];
  };

  type Vm = {
    id?: number;
    uuid?: string;
    name?: string;
    hostname?: string;
    osType?: string;
    osInfo?: string;
    hosttype?: string;
    networktype?: string;
    privateIp?: string;
    publicIp?: string;
    created?: string;
    updated?: string;
    creater?: string;
    address?: string;
    peerId?: string;
  };

  type UpdateVmReq = {
    name?: string;
    uuid?: string;
    os?: string;
    updater?: string;
  };
}
