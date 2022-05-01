# Go-ops Server
[toc]
## 1	环境变量

### 默认环境1
| 参数名 | 字段值 |
| ------ | ------ |



## 2	Go-ops Server

##### 说明
> 



##### 联系方式
- **联系人：**LUXINGWEN
- **邮箱：**
- **网址：**/https://github.com/luxingwen/

##### 文档版本
```

```


## 3	添加巡检项

> POST  /check/item/add
### 请求体(Request Body)
| 参数名称 | 数据类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| name|string||false|检查项名称|
| desc|string||false|检查项描述|
| type|string||false|类型|
| content|string||false|内容|
### 响应体
● 200 响应数据格式：JSON
| 参数名称 | 类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| code|int32||false|Error code|
| message|string||false|Error message|
| data|object||false|Result data for certain request according API definition|
|⇥ checkItemId|string||false|检查项id|
|⇥ name|string||false|检查项名称|
|⇥ desc|string||false|检查项描述|
|⇥ type|string||false|类型|
|⇥ content|string||false|内容|

##### 接口描述
> 




## 4	删除检查项

> POST  /check/item/delete
### 请求体(Request Body)
| 参数名称 | 数据类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| checkItemIds|array[string]||false|检查项id列表|
### 响应体
● 200 响应数据格式：JSON
| 参数名称 | 类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| code|int32||false|Error code|
| message|string||false|Error message|
| data|object||false|Result data for certain request according API definition|

##### 接口描述
> 




## 5	查询检查项

> POST  /check/item/query
### 请求体(Request Body)
| 参数名称 | 数据类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| name|string||false|检查项名称|
| type|string||false|类型|
| pageNum|int32||false|第几页|
| pageSize|int32||false|每页的数量|
### 响应体
● 200 响应数据格式：JSON
| 参数名称 | 类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| code|int32||false|Error code|
| message|string||false|Error message|
| data|object||false|Result data for certain request according API definition|
|⇥ total|int32||false|总数|
|⇥ pageNum|int32||false|第几页|
|⇥ pageSize|int32||false|每页的数量|
|⇥ pageTotal|int32||false|总共多少页|
|⇥ list|array[object]||false||
|⇥⇥ checkItemId|string||false|检查项id|
|⇥⇥ name|string||false|检查项名称|
|⇥⇥ desc|string||false|检查项描述|
|⇥⇥ type|string||false|类型|
|⇥⇥ content|string||false|内容|

##### 接口描述
> 




## 6	更新检查项

> POST  /check/item/update
### 请求体(Request Body)
| 参数名称 | 数据类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| checkItemId|string||false|检查项id|
| name|string||false|检查项名称|
| desc|string||false|检查项描述|
| type|string||false|类型|
| content|string||false|内容|
### 响应体
● 200 响应数据格式：JSON
| 参数名称 | 类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| code|int32||false|Error code|
| message|string||false|Error message|
| data|object||false|Result data for certain request according API definition|
|⇥ checkItemId|string||false|检查项id|
|⇥ name|string||false|检查项名称|
|⇥ desc|string||false|检查项描述|
|⇥ type|string||false|类型|
|⇥ content|string||false|内容|

##### 接口描述
> 




## 7	节点添加agent

> POST  /peer/agent/add
### 请求体(Request Body)
| 参数名称 | 数据类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| list|array[object]||false||
|⇥ peerid|string||false|节点id, 空表示默认版本,所有节点将使用这个版本|
|⇥ name|string||false|agent 名称|
|⇥ version|string||false|agent 版本|
|⇥ expectedStatus|string||false|期望状态 running,stopped,deleted|
|⇥ downloadUrl|string||false|下载地址|
|⇥ status|string||false|agent 当前状态|
|⇥ isDefault|int32||false|是否默认安装 0-否  1-是|
|⇥ timeout|int32||false|agent 启动超时时间|
### 响应体
● 200 响应数据格式：JSON
| 参数名称 | 类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| code|int32||false|Error code|
| message|string||false|Error message|
| data|object||false|Result data for certain request according API definition|
|⇥ list|array[object]||false||
|⇥⇥ peerid|string||false|节点id, 空表示默认版本,所有节点将使用这个版本|
|⇥⇥ name|string||false|agent 名称|
|⇥⇥ version|string||false|agent 版本|
|⇥⇥ expectedStatus|string||false|期望状态 running,stopped,deleted|
|⇥⇥ downloadUrl|string||false|下载地址|
|⇥⇥ status|string||false|agent 当前状态|
|⇥⇥ isDefault|int32||false|是否默认安装 0-否  1-是|
|⇥⇥ timeout|int32||false|agent 启动超时时间|

##### 接口描述
> 




## 8	查询agent状态

> POST  /peer/agent/status
### 请求体(Request Body)
| 参数名称 | 数据类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| list|array[object]||false||
|⇥ peerid|string||false|节点id|
|⇥ agents|array[string]||false|需要查询的agent名称列表|
### 响应体
● 200 响应数据格式：JSON
| 参数名称 | 类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| code|int32||false|Error code|
| message|string||false|Error message|
| data|object||false|Result data for certain request according API definition|
|⇥ List|array[object]||false||
|⇥⇥ peerid|string||false|节点id|
|⇥⇥ Agents|array[object]||false||
|⇥⇥⇥ peerid|string||false|节点id, 空表示默认版本,所有节点将使用这个版本|
|⇥⇥⇥ name|string||false|agent 名称|
|⇥⇥⇥ version|string||false|agent 版本|
|⇥⇥⇥ expectedStatus|string||false|期望状态 running,stopped,deleted|
|⇥⇥⇥ downloadUrl|string||false|下载地址|
|⇥⇥⇥ status|string||false|agent 当前状态|
|⇥⇥⇥ isDefault|int32||false|是否默认安装 0-否  1-是|
|⇥⇥⇥ timeout|int32||false|agent 启动超时时间|

##### 接口描述
> 




## 9	节点更新agent

> POST  /peer/agent/update
### 请求体(Request Body)
| 参数名称 | 数据类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| list|array[object]||false||
|⇥ peerid|string||false|节点id, 空表示默认版本,所有节点将使用这个版本|
|⇥ name|string||false|agent 名称|
|⇥ version|string||false|agent 版本|
|⇥ expectedStatus|string||false|期望状态 running,stopped,deleted|
|⇥ downloadUrl|string||false|下载地址|
|⇥ status|string||false|agent 当前状态|
|⇥ isDefault|int32||false|是否默认安装 0-否  1-是|
|⇥ timeout|int32||false|agent 启动超时时间|
### 响应体
● 200 响应数据格式：JSON
| 参数名称 | 类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| code|int32||false|Error code|
| message|string||false|Error message|
| data|object||false|Result data for certain request according API definition|
|⇥ list|array[object]||false||
|⇥⇥ peerid|string||false|节点id, 空表示默认版本,所有节点将使用这个版本|
|⇥⇥ name|string||false|agent 名称|
|⇥⇥ version|string||false|agent 版本|
|⇥⇥ expectedStatus|string||false|期望状态 running,stopped,deleted|
|⇥⇥ downloadUrl|string||false|下载地址|
|⇥⇥ status|string||false|agent 当前状态|
|⇥⇥ isDefault|int32||false|是否默认安装 0-否  1-是|
|⇥⇥ timeout|int32||false|agent 启动超时时间|

##### 接口描述
> 




## 10	创建文件分发任务

> POST  /peer/downloadfile
### 请求体(Request Body)
| 参数名称 | 数据类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| name|string||false|任务名称|
| creater|string||false|创建人|
| peers|array[string]||false|节点列表|
| files|array[object]||false||
|⇥ filename|string||false|文件名称|
|⇥ address|string||false|文件的下载url地址|
|⇥ path|string||false|文件的保存路径|
|⇥ auto_create_path|boolean||false|是否自动创建文件夹|
|⇥ replace|boolean||false|如果文件已经存在,是否替换文件|
### 响应体
● 200 响应数据格式：JSON
| 参数名称 | 类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| code|int32||false|Error code|
| message|string||false|Error message|
| data|object||false|Result data for certain request according API definition|
|⇥ taskid|string||false|任务id|
|⇥ status|string||false|状态（doing, failed, done）|
|⇥ list|array[object]||false|任务列表详情|
|⇥⇥ status|string||false||
|⇥⇥ peerid|string||false|节点id|
|⇥⇥ jobid|string||false|任务id|
|⇥⇥ filename|string||false|文件名|
|⇥⇥ code|string||false|代码|
|⇥⇥ msg|string||false||

##### 接口描述
> 




## 11	文件分发任务详情

> POST  /peer/downloadfile/details
### 请求体(Request Body)
| 参数名称 | 数据类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| taskid|string||false||
### 响应体
● 200 响应数据格式：JSON
| 参数名称 | 类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| code|int32||false|Error code|
| message|string||false|Error message|
| data|object||false|Result data for certain request according API definition|
|⇥ taskid|string||false|任务id|
|⇥ status|string||false|状态（doing, failed, done）|
|⇥ list|array[object]||false|任务列表详情|
|⇥⇥ status|string||false||
|⇥⇥ peerid|string||false|节点id|
|⇥⇥ jobid|string||false|任务id|
|⇥⇥ filename|string||false|文件名|
|⇥⇥ code|string||false|代码|
|⇥⇥ msg|string||false||

##### 接口描述
> 




## 12	连接节点

> POST  /peer/node/connect
### 请求体(Request Body)
| 参数名称 | 数据类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| nodeid|string||false|节点id|
| remoteAddr|string||false|远程节点连接地址|
### 响应体
● 200 响应数据格式：JSON
| 参数名称 | 类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| code|int32||false|Error code|
| message|string||false|Error message|
| data|object||false|Result data for certain request according API definition|
|⇥ msg|string||false||

##### 接口描述
> 




## 13	获取节点文件夹信息

> POST  /peer/node/files
### 请求体(Request Body)
| 参数名称 | 数据类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| nodeid|string||false||
| path|string||false|路径|
### 响应体
● 200 响应数据格式：JSON
| 参数名称 | 类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| code|int32||false|Error code|
| message|string||false|Error message|
| data|object||false|Result data for certain request according API definition|
|⇥ files|array[object]||false||
|⇥⇥ name|string||false|文件名称|
|⇥⇥ type|string||false|文件类型, dir 表示文件夹|
|⇥⇥ size|int32||false|大小|
|⇥⇥ path|string||false|路径|
|⇥⇥ mtime|string||false|修改时间|

##### 接口描述
> 




## 14	创建节点文件夹

> POST  /peer/node/files/createDir
### 请求体(Request Body)
| 参数名称 | 数据类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| nodeid|string||false||
| path|string||false|文件夹路径|
### 响应体
● 200 响应数据格式：JSON
| 参数名称 | 类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| code|int32||false|Error code|
| message|string||false|Error message|
| data|object||false|Result data for certain request according API definition|
|⇥ files|array[object]||false||
|⇥⇥ name|string||false|文件名称|
|⇥⇥ type|string||false|文件类型, dir 表示文件夹|
|⇥⇥ size|int32||false|大小|
|⇥⇥ path|string||false|路径|
|⇥⇥ mtime|string||false|修改时间|

##### 接口描述
> 




## 15	删除节点文件

> POST  /peer/node/files/delete
### 请求体(Request Body)
| 参数名称 | 数据类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| nodeid|string||false||
| path|string||false|文件夹(文件)路径|
### 响应体
● 200 响应数据格式：JSON
| 参数名称 | 类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| code|int32||false|Error code|
| message|string||false|Error message|
| data|object||false|Result data for certain request according API definition|
|⇥ files|array[object]||false||
|⇥⇥ name|string||false|文件名称|
|⇥⇥ type|string||false|文件类型, dir 表示文件夹|
|⇥⇥ size|int32||false|大小|
|⇥⇥ path|string||false|路径|
|⇥⇥ mtime|string||false|修改时间|

##### 接口描述
> 




## 16	移动节点文件

> POST  /peer/node/files/move
### 请求体(Request Body)
| 参数名称 | 数据类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| nodeid|string||false||
| src|string||false|源文件夹(文件)路径|
| dst|string||false|目标文件夹(文件)路径|
### 响应体
● 200 响应数据格式：JSON
| 参数名称 | 类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| code|int32||false|Error code|
| message|string||false|Error message|
| data|object||false|Result data for certain request according API definition|
|⇥ files|array[object]||false||
|⇥⇥ name|string||false|文件名称|
|⇥⇥ type|string||false|文件类型, dir 表示文件夹|
|⇥⇥ size|int32||false|大小|
|⇥⇥ path|string||false|路径|
|⇥⇥ mtime|string||false|修改时间|

##### 接口描述
> 




## 17	获取节点状态

> POST  /peer/node/stat
### 请求体(Request Body)
| 参数名称 | 数据类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| nodeid|string||false||
### 响应体
● 200 响应数据格式：JSON
| 参数名称 | 类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| code|int32||false|Error code|
| message|string||false|Error message|
| data|object||false|Result data for certain request according API definition|
|⇥ PeerId|string||false||
|⇥ HostInfo|object||false||
|⇥⇥ hostname|string||false||
|⇥⇥ uptime|int32||false||
|⇥⇥ bootTime|int32||false||
|⇥⇥ procs|int32||false||
|⇥⇥ os|string||false||
|⇥⇥ platform|string||false||
|⇥⇥ platformFamily|string||false||
|⇥⇥ platformVersion|string||false||
|⇥⇥ kernelVersion|string||false||
|⇥⇥ kernelArch|string||false||
|⇥⇥ virtualizationSystem|string||false||
|⇥⇥ virtualizationRole|string||false||
|⇥⇥ hostId|string||false||
|⇥ Swapmem|object||false||
|⇥⇥ total|int32||false||
|⇥⇥ used|int32||false||
|⇥⇥ free|int32||false||
|⇥⇥ usedPercent|number||false||
|⇥⇥ sin|int32||false||
|⇥⇥ sout|int32||false||
|⇥⇥ pgIn|int32||false||
|⇥⇥ pgOut|int32||false||
|⇥⇥ pgFault|int32||false||
|⇥⇥ pgMajFault|int32||false||
|⇥ Mem|object||false||
|⇥⇥ total|int32||false||
|⇥⇥ available|int32||false||
|⇥⇥ used|int32||false||
|⇥⇥ usedPercent|number||false||
|⇥⇥ free|int32||false||
|⇥⇥ active|int32||false||
|⇥⇥ inactive|int32||false||
|⇥⇥ wired|int32||false||
|⇥⇥ laundry|int32||false||
|⇥⇥ buffers|int32||false||
|⇥⇥ cached|int32||false||
|⇥⇥ writeBack|int32||false||
|⇥⇥ dirty|int32||false||
|⇥⇥ writeBackTmp|int32||false||
|⇥⇥ shared|int32||false||
|⇥⇥ slab|int32||false||
|⇥⇥ sreclaimable|int32||false||
|⇥⇥ sunreclaim|int32||false||
|⇥⇥ pageTables|int32||false||
|⇥⇥ swapCached|int32||false||
|⇥⇥ commitLimit|int32||false||
|⇥⇥ committedAS|int32||false||
|⇥⇥ highTotal|int32||false||
|⇥⇥ highFree|int32||false||
|⇥⇥ lowTotal|int32||false||
|⇥⇥ lowFree|int32||false||
|⇥⇥ swapTotal|int32||false||
|⇥⇥ swapFree|int32||false||
|⇥⇥ mapped|int32||false||
|⇥⇥ vmallocTotal|int32||false||
|⇥⇥ vmallocUsed|int32||false||
|⇥⇥ vmallocChunk|int32||false||
|⇥⇥ hugePagesTotal|int32||false||
|⇥⇥ hugePagesFree|int32||false||
|⇥⇥ hugePageSize|int32||false||
|⇥ CpuInfo|array[object]||false||
|⇥⇥ cpu|int32||false||
|⇥⇥ vendorId|string||false||
|⇥⇥ family|string||false||
|⇥⇥ model|string||false||
|⇥⇥ stepping|int32||false||
|⇥⇥ physicalId|string||false||
|⇥⇥ coreId|string||false||
|⇥⇥ cores|int32||false||
|⇥⇥ modelName|string||false||
|⇥⇥ mhz|number||false||
|⇥⇥ cacheSize|int32||false||
|⇥⇥ flags|array[string]||false||
|⇥⇥ microcode|string||false||
|⇥ DiskUseInfo|object||false||
|⇥⇥ path|string||false||
|⇥⇥ fstype|string||false||
|⇥⇥ total|int32||false||
|⇥⇥ free|int32||false||
|⇥⇥ used|int32||false||
|⇥⇥ usedPercent|number||false||
|⇥⇥ inodesTotal|int32||false||
|⇥⇥ inodesUsed|int32||false||
|⇥⇥ inodesFree|int32||false||
|⇥⇥ inodesUsedPercent|number||false||
|⇥ Interfaces|array[object]||false||
|⇥⇥ index|int32||false||
|⇥⇥ mtu|int32||false||
|⇥⇥ name|string||false||
|⇥⇥ hardwareAddr|string||false||
|⇥⇥ flags|array[string]||false||
|⇥⇥ addrs|array[object]||false||
|⇥⇥⇥ addr|string||false||

##### 接口描述
> 




## 18	停止节点连接

> POST  /peer/node/stop
### 请求体(Request Body)
| 参数名称 | 数据类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| nodeid|string||false||
| remoteId|string||false||
### 响应体
● 200 响应数据格式：JSON
| 参数名称 | 类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| code|int32||false|Error code|
| message|string||false|Error message|
| data|object||false|Result data for certain request according API definition|
|⇥ msg|string||false||

##### 接口描述
> 




## 19	获取节点连接信息

> POST  /peer/nodes
### 请求体(Request Body)
| 参数名称 | 数据类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| nodeid|string||false|节点id,空表示当前节点|
### 响应体
● 200 响应数据格式：JSON
| 参数名称 | 类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| code|int32||false|Error code|
| message|string||false|Error message|
| data|object||false|Result data for certain request according API definition|
|⇥ Nodes|array[object]||false|节点列表|
|⇥⇥ id|string||false||
|⇥⇥ addr|string||false||
|⇥⇥ name|string||false||
|⇥⇥ type|string||false||
|⇥⇥ data|string||false||

##### 接口描述
> 




## 20	脚本异步执行

> POST  /script/async
### 请求体(Request Body)
| 参数名称 | 数据类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| name|string||false|脚本任务名|
| creater|string||false|创建者|
| peers|array[string]||false|节点id列表|
| content|object||false||
|⇥ path|string||false|脚本工作路径|
|⇥ cmd|string||false|解释器|
|⇥ env|object||false|环境变量|
|⇥ content|string||false|脚本内容|
|⇥ execWay|int32||false|脚本执行方式,0-命令行执行(适合简单命令) 1-内容执行(脚本内容会保存到一个文件下进行运行) 2-脚本名执行,脚本存在本机上, 3-从服务器上下载脚本执行, 脚本放在服务器上|
|⇥ filehash|string||false||
|⇥ user|string||false|脚本执行的用户|
|⇥ timeout|int32||false|脚本执行的超时时间|
|⇥ args|array[string]||false|脚本需要传入的参数|
|⇥ input|string||false|脚本通过stdin输入内容|
### 响应体
● 200 响应数据格式：JSON
| 参数名称 | 类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| code|int32||false|Error code|
| message|string||false|Error message|
| data|object||false|Result data for certain request according API definition|
|⇥ taskid|string||false|任务id|

##### 接口描述
> 




## 21	取消脚本运行

> POST  /script/cancel
### 请求体(Request Body)
| 参数名称 | 数据类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| tasks|array[object]||false||
|⇥ peerid|string||false|节点id|
|⇥ jobid|string||false|任务id|
|⇥ msg|string||false||
### 响应体
● 200 响应数据格式：JSON
| 参数名称 | 类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| code|int32||false|Error code|
| message|string||false|Error message|
| data|object||false|Result data for certain request according API definition|
|⇥ list|array[object]||false||
|⇥⇥ peerid|string||false|节点id|
|⇥⇥ jobid|string||false|任务id|
|⇥⇥ msg|string||false||

##### 接口描述
> 




## 22	远程节点上的脚本任务信息

> POST  /script/peer/taskinfo
### 请求体(Request Body)
| 参数名称 | 数据类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| peerid|string||false|节点id|
| taskid|string||false|任务id|
### 响应体
● 200 响应数据格式：JSON
| 参数名称 | 类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| code|int32||false|Error code|
| message|string||false|Error message|
| data|object||false|Result data for certain request according API definition|
|⇥ peerid|string||false||
|⇥ req|object||false||
|⇥ status|string||false||
|⇥ value|object||false||
|⇥ err|string||false||

##### 接口描述
> 




## 23	脚本同步执行

> POST  /script/sync
### 请求体(Request Body)
| 参数名称 | 数据类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| name|string||false|脚本任务名|
| creater|string||false|创建者|
| peers|array[string]||false|节点id列表|
| content|object||false||
|⇥ path|string||false|脚本工作路径|
|⇥ cmd|string||false|解释器|
|⇥ env|object||false|环境变量|
|⇥ content|string||false|脚本内容|
|⇥ execWay|int32||false|脚本执行方式,0-命令行执行(适合简单命令) 1-内容执行(脚本内容会保存到一个文件下进行运行) 2-脚本名执行,脚本存在本机上, 3-从服务器上下载脚本执行, 脚本放在服务器上|
|⇥ filehash|string||false||
|⇥ user|string||false|脚本执行的用户|
|⇥ timeout|int32||false|脚本执行的超时时间|
|⇥ args|array[string]||false|脚本需要传入的参数|
|⇥ input|string||false|脚本通过stdin输入内容|
### 响应体
● 200 响应数据格式：JSON
| 参数名称 | 类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| code|int32||false|Error code|
| message|string||false|Error message|
| data|object||false|Result data for certain request according API definition|
|⇥ taskid|string||false|任务id|
|⇥ status|string||false||
|⇥ list|array[object]||false||
|⇥⇥ jobid|string||false||
|⇥⇥ peerId|string||false||
|⇥⇥ resCmd|object||false||
|⇥⇥⇥ stdout|string||false||
|⇥⇥⇥ stderr|string||false||
|⇥⇥⇥ code|string||false||
|⇥⇥⇥ err|string||false||
|⇥⇥⇥ exitCode|int32||false||
|⇥⇥⇥ res|string||false||
|⇥⇥ status|string||false||

##### 接口描述
> 




## 24	脚本任务信息

> POST  /script/taskinfo
### 请求体(Request Body)
| 参数名称 | 数据类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| taskid|string||false||
### 响应体
● 200 响应数据格式：JSON
| 参数名称 | 类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| code|int32||false|Error code|
| message|string||false|Error message|
| data|object||false|Result data for certain request according API definition|
|⇥ taskid|string||false|任务id|
|⇥ status|string||false||
|⇥ list|array[object]||false||
|⇥⇥ jobid|string||false||
|⇥⇥ peerId|string||false||
|⇥⇥ resCmd|object||false||
|⇥⇥⇥ stdout|string||false||
|⇥⇥⇥ stderr|string||false||
|⇥⇥⇥ code|string||false||
|⇥⇥⇥ err|string||false||
|⇥⇥⇥ exitCode|int32||false||
|⇥⇥⇥ res|string||false||
|⇥⇥ status|string||false||

##### 接口描述
> 




## 25	创建一个app

> POST  /v1/m/app
### 请求体(Request Body)
| 参数名称 | 数据类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| name|string||false|应用名|
| owner|string||false|拥有者|
### 响应体
● 200 响应数据格式：JSON
| 参数名称 | 类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| code|int32||false|Error code|
| message|string||false|Error message|
| data|object||false|Result data for certain request according API definition|
|⇥ appid|string||false|appid|
|⇥ apiKey|string||false||
|⇥ secKey|string||false||
|⇥ owner|string||false|拥有者|
|⇥ name|string||false|应用名|
|⇥ status|int32||false|状态 1启用 0 禁用|
|⇥ ownerUid|string||false|拥有者uid|

##### 接口描述
> 




## 26	更新一个app

> PUT  /v1/m/app
### 请求体(Request Body)
| 参数名称 | 数据类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| appid|string||false|appid|
| name|string||false|应用名|
| owner|string||false|拥有者|
| status|int32||false|状态 1启用 0 禁用|
### 响应体
● 200 响应数据格式：JSON
| 参数名称 | 类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| code|int32||false|Error code|
| message|string||false|Error message|
| data|object||false|Result data for certain request according API definition|
|⇥ appid|string||false|appid|
|⇥ apiKey|string||false||
|⇥ secKey|string||false||
|⇥ owner|string||false|拥有者|
|⇥ name|string||false|应用名|
|⇥ status|int32||false|状态 1启用 0 禁用|
|⇥ ownerUid|string||false|拥有者uid|

##### 接口描述
> 




## 27	删除app

> POST  /v1/m/app/delete
### 请求体(Request Body)
| 参数名称 | 数据类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| appids|array[string]||false|app id 列表|
### 响应体
● 200 响应数据格式：JSON
| 参数名称 | 类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| code|int32||false|Error code|
| message|string||false|Error message|
| data|object||false|Result data for certain request according API definition|

##### 接口描述
> 




## 28	查询app

> POST  /v1/m/app/query
### 请求体(Request Body)
| 参数名称 | 数据类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| name|string||false|应用名|
| owner|string||false|拥有者|
| pageNum|int32||false|第几页|
| pageSize|int32||false|每页的数量|
### 响应体
● 200 响应数据格式：JSON
| 参数名称 | 类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| code|int32||false|Error code|
| message|string||false|Error message|
| data|object||false|Result data for certain request according API definition|
|⇥ total|int32||false|总数|
|⇥ pageNum|int32||false|第几页|
|⇥ pageSize|int32||false|每页的数量|
|⇥ pageTotal|int32||false|总共多少页|
|⇥ list|array[object]||false||
|⇥⇥ id|int32||false||
|⇥⇥ appid|string||false||
|⇥⇥ apiKey|string||false||
|⇥⇥ secKey|string||false||
|⇥⇥ owner|string||false||
|⇥⇥ name|string||false||
|⇥⇥ status|int32||false||
|⇥⇥ ownerUid|string||false||
|⇥⇥ created|string||false||
|⇥⇥ updated|string||false||

##### 接口描述
> 




## 29	添加插件

> POST  /v1/m/plugin/create
### 请求体(Request Body)
| 参数名称 | 数据类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| name|string||false|插件名|
| packageName|string||false|包名|
| os|string||false|操作系统|
| arch|string||false|架构|
| md5|string||false|包md5名称|
| creater|string||false|创建人|
### 响应体
● 200 响应数据格式：JSON
| 参数名称 | 类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| code|int32||false|Error code|
| message|string||false|Error message|
| data|object||false|Result data for certain request according API definition|
|⇥ uuid|string||false|插件uuid|
|⇥ name|string||false|插件名|
|⇥ packageName|string||false|包名|
|⇥ os|string||false|操作系统|
|⇥ arch|string||false|架构|
|⇥ md5|string||false|包md5名称|
|⇥ creater|string||false|创建人|
|⇥ updater|string||false|更新人|
|⇥ created|string||false|创建时间|
|⇥ updated|string||false|更新时间|

##### 接口描述
> 




## 30	删除插件

> POST  /v1/m/plugin/delete
### 请求体(Request Body)
| 参数名称 | 数据类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| uuids|array[string]||false|插件uuid列表|
### 响应体
● 200 响应数据格式：JSON
| 参数名称 | 类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| code|int32||false|Error code|
| message|string||false|Error message|
| data|object||false|Result data for certain request according API definition|

##### 接口描述
> 




## 31	查询插件

> POST  /v1/m/plugin/query
### 请求体(Request Body)
| 参数名称 | 数据类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| pageNum|int32||false|第几页|
| pageSize|int32||false|每页的数量|
| uuid|string||false|插件uuid|
| name|string||false|插件名|
| packageName|string||false|包名|
| os|string||false|操作系统|
| arch|string||false|架构|
| md5|string||false|包md5名称|
| creater|string||false|创建人|
| updater|string||false|更新人|
| created|string||false|创建时间|
| updated|string||false|更新时间|
### 响应体
● 200 响应数据格式：JSON
| 参数名称 | 类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| code|int32||false|Error code|
| message|string||false|Error message|
| data|object||false|Result data for certain request according API definition|
|⇥ total|int32||false|总数|
|⇥ pageNum|int32||false|第几页|
|⇥ pageSize|int32||false|每页的数量|
|⇥ pageTotal|int32||false|总共多少页|
|⇥ list|array[object]||false||
|⇥⇥ id|int32||false||
|⇥⇥ uuid|string||false||
|⇥⇥ name|string||false||
|⇥⇥ packageName|string||false||
|⇥⇥ os|string||false||
|⇥⇥ arch|string||false||
|⇥⇥ md5|string||false||
|⇥⇥ creater|string||false||
|⇥⇥ updater|string||false||
|⇥⇥ created|string||false||
|⇥⇥ updated|string||false||

##### 接口描述
> 




## 32	更新插件

> POST  /v1/m/plugin/update
### 请求体(Request Body)
| 参数名称 | 数据类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| uuid|string||false|插件uuid|
| name|string||false|插件名|
| packageName|string||false|包名|
| os|string||false|操作系统|
| arch|string||false|架构|
| md5|string||false|包md5名称|
| creater|string||false|创建人|
| updater|string||false|更新人|
| created|string||false|创建时间|
| updated|string||false|更新时间|
### 响应体
● 200 响应数据格式：JSON
| 参数名称 | 类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| code|int32||false|Error code|
| message|string||false|Error message|
| data|object||false|Result data for certain request according API definition|
|⇥ uuid|string||false|插件uuid|
|⇥ name|string||false|插件名|
|⇥ packageName|string||false|包名|
|⇥ os|string||false|操作系统|
|⇥ arch|string||false|架构|
|⇥ md5|string||false|包md5名称|
|⇥ creater|string||false|创建人|
|⇥ updater|string||false|更新人|
|⇥ created|string||false|创建时间|
|⇥ updated|string||false|更新时间|

##### 接口描述
> 




## 33	创建一个脚本

> POST  /v1/m/script
### 请求体(Request Body)
| 参数名称 | 数据类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| name|string||false|脚本名称|
| content|string||false|脚本内容|
| args|object||false|参数信息|
| desc|string||false|描述信息|
| type|string||false|脚本类型shell或者powershell|
| creater|string||false|创建人|
### 响应体
● 200 响应数据格式：JSON
| 参数名称 | 类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| code|int32||false|Error code|
| message|string||false|Error message|
| data|object||false|Result data for certain request according API definition|
|⇥ scriptId|string||false|脚本id|
|⇥ name|string||false|脚本名称|
|⇥ content|string||false|脚本内容|
|⇥ args|object||false|参数信息|
|⇥ desc|string||false|描述信息|
|⇥ type|string||false|脚本类型shell或者powershell|
|⇥ creater|string||false|创建人|
|⇥ updater|string||false|更新人|

##### 接口描述
> 




## 34	更新脚本信息

> PUT  /v1/m/script
### 请求体(Request Body)
| 参数名称 | 数据类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| scriptId|string||false|脚本id|
| name|string||false|脚本名称|
| content|string||false|脚本内容|
| args|object||false|参数信息|
| desc|string||false|描述信息|
| type|string||false|脚本类型shell或者powershell|
| updater|string||false|更新人|
### 响应体
● 200 响应数据格式：JSON
| 参数名称 | 类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| code|int32||false|Error code|
| message|string||false|Error message|
| data|object||false|Result data for certain request according API definition|
|⇥ scriptId|string||false|脚本id|
|⇥ name|string||false|脚本名称|
|⇥ content|string||false|脚本内容|
|⇥ args|object||false|参数信息|
|⇥ desc|string||false|描述信息|
|⇥ type|string||false|脚本类型shell或者powershell|
|⇥ creater|string||false|创建人|
|⇥ updater|string||false|更新人|

##### 接口描述
> 




## 35	删除脚本信息

> POST  /v1/m/script/delete
### 请求体(Request Body)
| 参数名称 | 数据类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| scriptIds|array[string]||false|脚本id 列表|
### 响应体
● 200 响应数据格式：JSON
| 参数名称 | 类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| code|int32||false|Error code|
| message|string||false|Error message|
| data|object||false|Result data for certain request according API definition|

##### 接口描述
> 




## 36	查询脚本库信息

> POST  /v1/m/script/query
### 请求体(Request Body)
| 参数名称 | 数据类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| name|string||false|脚本名称|
| type|string||false|脚本类型shell或者powershell|
| pageNum|int32||false|第几页|
| pageSize|int32||false|每页的数量|
### 响应体
● 200 响应数据格式：JSON
| 参数名称 | 类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| code|int32||false|Error code|
| message|string||false|Error message|
| data|object||false|Result data for certain request according API definition|
|⇥ total|int32||false|总数|
|⇥ pageNum|int32||false|第几页|
|⇥ pageSize|int32||false|每页的数量|
|⇥ pageTotal|int32||false|总共多少页|
|⇥ list|array[object]||false||
|⇥⇥ id|int32||false||
|⇥⇥ name|string||false||
|⇥⇥ content|string||false||
|⇥⇥ args|string||false||
|⇥⇥ desc|string||false||
|⇥⇥ type|string||false||
|⇥⇥ ownerType|string||false||
|⇥⇥ ownerUid|string||false||
|⇥⇥ created|string||false||
|⇥⇥ updated|string||false||
|⇥⇥ scriptUid|string||false||

##### 接口描述
> 




## 37	创建定时任务

> POST  /v1/m/task/cron/create
### 请求体(Request Body)
| 参数名称 | 数据类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| name|string||false|任务名称|
| type|string||false|任务类型|
| creater|string||false|创建人|
| content|string||false|定时任务内容|
| cronExpr|string||false|定时任务表达式|
| status|string||false|定时任务状态|
### 响应体
● 200 响应数据格式：JSON
| 参数名称 | 类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| code|int32||false|Error code|
| message|string||false|Error message|
| data|object||false|Result data for certain request according API definition|
|⇥ name|string||false|任务名称|
|⇥ type|string||false|任务类型|
|⇥ creater|string||false|创建人|
|⇥ content|string||false|定时任务内容|
|⇥ cronExpr|string||false|定时任务表达式|
|⇥ status|string||false|定时任务状态|
|⇥ created|string||false|创建时间|
|⇥ cronUid|string||false|定时任务唯一id|
|⇥ lastRunTime|string||false|最后运行时间|
|⇥ nextRunTime|string||false|下次运行时间|
|⇥ updated|string||false|更新时间|
|⇥ updater|string||false|更新人|

##### 接口描述
> 




## 38	删除定时任务

> POST  /v1/m/task/cron/delete
### 请求体(Request Body)
| 参数名称 | 数据类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| cronUids|array[string]||false|定时任务唯一id列表|
### 响应体
● 200 响应数据格式：JSON
| 参数名称 | 类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| code|int32||false|Error code|
| message|string||false|Error message|
| data|object||false|Result data for certain request according API definition|
|⇥ message|string||false||

##### 接口描述
> 




## 39	查询定时任务

> POST  /v1/m/task/cron/query
### 请求体(Request Body)
| 参数名称 | 数据类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| cronUid|string||false|定时任务唯一id|
| name|string||false|任务名称|
| type|string||false|任务类型|
| creater|string||false|创建人|
| pageNum|int32||false|第几页|
| pageSize|int32||false|每页的数量|
### 响应体
● 200 响应数据格式：JSON
| 参数名称 | 类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| code|int32||false|Error code|
| message|string||false|Error message|
| data|object||false|Result data for certain request according API definition|
|⇥ total|int32||false|总数|
|⇥ pageNum|int32||false|第几页|
|⇥ pageSize|int32||false|每页的数量|
|⇥ pageTotal|int32||false|总共多少页|
|⇥ list|array[object]||false||
|⇥⇥ name|string||false|任务名称|
|⇥⇥ type|string||false|任务类型|
|⇥⇥ creater|string||false|创建人|
|⇥⇥ content|string||false|定时任务内容|
|⇥⇥ cronExpr|string||false|定时任务表达式|
|⇥⇥ status|string||false|定时任务状态|
|⇥⇥ created|string||false|创建时间|
|⇥⇥ cronUid|string||false|定时任务唯一id|
|⇥⇥ lastRunTime|string||false|最后运行时间|
|⇥⇥ nextRunTime|string||false|下次运行时间|
|⇥⇥ updated|string||false|更新时间|
|⇥⇥ updater|string||false|更新人|

##### 接口描述
> 




## 40	启动定时任务

> POST  /v1/m/task/cron/start
### 请求体(Request Body)
| 参数名称 | 数据类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| cronUid|string||false|定时任务唯一id|
### 响应体
● 200 响应数据格式：JSON
| 参数名称 | 类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| code|int32||false|Error code|
| message|string||false|Error message|
| data|object||false|Result data for certain request according API definition|

##### 接口描述
> 




## 41	停止定时任务

> POST  /v1/m/task/cron/stop
### 请求体(Request Body)
| 参数名称 | 数据类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| cronUid|string||false|定时任务唯一id|
### 响应体
● 200 响应数据格式：JSON
| 参数名称 | 类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| code|int32||false|Error code|
| message|string||false|Error message|
| data|object||false|Result data for certain request according API definition|

##### 接口描述
> 




## 42	更新定时任务

> POST  /v1/m/task/cron/update
### 请求体(Request Body)
| 参数名称 | 数据类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| name|string||false|任务名称|
| type|string||false|任务类型|
| updater|string||false|更新人|
| content|string||false|定时任务内容|
| cronExpr|string||false|定时任务表达式|
| status|string||false|定时任务状态|
| cronUid|string||false|定时任务唯一id|
### 响应体
● 200 响应数据格式：JSON
| 参数名称 | 类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| code|int32||false|Error code|
| message|string||false|Error message|
| data|object||false|Result data for certain request according API definition|
|⇥ name|string||false|任务名称|
|⇥ type|string||false|任务类型|
|⇥ creater|string||false|创建人|
|⇥ content|string||false|定时任务内容|
|⇥ cronExpr|string||false|定时任务表达式|
|⇥ status|string||false|定时任务状态|
|⇥ created|string||false|创建时间|
|⇥ cronUid|string||false|定时任务唯一id|
|⇥ lastRunTime|string||false|最后运行时间|
|⇥ nextRunTime|string||false|下次运行时间|
|⇥ updated|string||false|更新时间|
|⇥ updater|string||false|更新人|

##### 接口描述
> 




## 43	单个任务信息

> POST  /v1/m/task/info
### 请求体(Request Body)
| 参数名称 | 数据类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| taskid|string||false|任务id|
### 响应体
● 200 响应数据格式：JSON
| 参数名称 | 类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| code|int32||false|Error code|
| message|string||false|Error message|
| data|object||false|Result data for certain request according API definition|
|⇥ task|object||false||
|⇥⇥ id|int32||false||
|⇥⇥ taskId|string||false||
|⇥⇥ type|string||false||
|⇥⇥ content|string||false||
|⇥⇥ name|string||false||
|⇥⇥ reqid|string||false||
|⇥⇥ parentId|string||false||
|⇥⇥ status|string||false||
|⇥⇥ created|string||false||
|⇥⇥ updated|string||false||
|⇥⇥ creater|string||false||
|⇥ sublist|array[object]||false|子任务详情|
|⇥⇥ task|object||false||
|⇥⇥⇥ id|int32||false||
|⇥⇥⇥ taskId|string||false||
|⇥⇥⇥ type|string||false||
|⇥⇥⇥ content|string||false||
|⇥⇥⇥ name|string||false||
|⇥⇥⇥ reqid|string||false||
|⇥⇥⇥ parentId|string||false||
|⇥⇥⇥ status|string||false||
|⇥⇥⇥ created|string||false||
|⇥⇥⇥ updated|string||false||
|⇥⇥⇥ creater|string||false||
|⇥⇥ sublist|array||false|子任务详情|

##### 接口描述
> 




## 44	创建预设任务

> POST  /v1/m/task/preset/create
### 请求体(Request Body)
| 参数名称 | 数据类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| type|string||false|任务类型|
| name|string||false|任务名|
| creater|string||false|创建人|
| content|string||false|预设任务内容|
### 响应体
● 200 响应数据格式：JSON
| 参数名称 | 类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| code|int32||false|Error code|
| message|string||false|Error message|
| data|object||false|Result data for certain request according API definition|
|⇥ uuid|string||false|预设任务uuid|
|⇥ type|string||false|任务类型|
|⇥ name|string||false|任务名|
|⇥ creater|string||false|创建人|
|⇥ content|string||false|预设任务内容|
|⇥ created|string||false|创建时间|
|⇥ updated|string||false|更新时间|
|⇥ updater|string||false|更新人|

##### 接口描述
> 




## 45	删除预设任务

> POST  /v1/m/task/preset/deleted
### 请求体(Request Body)
| 参数名称 | 数据类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| uuids|array[string]||false|预设任务uuid列表|
### 响应体
● 200 响应数据格式：JSON
| 参数名称 | 类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| code|int32||false|Error code|
| message|string||false|Error message|
| data|object||false|Result data for certain request according API definition|
|⇥ message|string||false||

##### 接口描述
> 




## 46	查询预设任务

> POST  /v1/m/task/preset/query
### 请求体(Request Body)
| 参数名称 | 数据类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| uuid|string||false|预设任务uuid|
| name|string||false|任务名|
| creater|string||false|创建人|
| pageNum|int32||false|第几页|
| pageSize|int32||false|每页的数量|
### 响应体
● 200 响应数据格式：JSON
| 参数名称 | 类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| code|int32||false|Error code|
| message|string||false|Error message|
| data|object||false|Result data for certain request according API definition|
|⇥ total|int32||false|总数|
|⇥ pageNum|int32||false|第几页|
|⇥ pageSize|int32||false|每页的数量|
|⇥ pageTotal|int32||false|总共多少页|
|⇥ list|array[object]||false||
|⇥⇥ uuid|string||false|预设任务uuid|
|⇥⇥ type|string||false|任务类型|
|⇥⇥ name|string||false|任务名|
|⇥⇥ creater|string||false|创建人|
|⇥⇥ content|string||false|预设任务内容|
|⇥⇥ created|string||false|创建时间|
|⇥⇥ updated|string||false|更新时间|
|⇥⇥ updater|string||false|更新人|

##### 接口描述
> 




## 47	更新预设任务

> POST  /v1/m/task/preset/update
### 请求体(Request Body)
| 参数名称 | 数据类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| uuid|string||false|预设任务uuid|
| type|string||false|任务类型|
| name|string||false|任务名|
| updater|string||false|更新人|
| content|string||false|预设任务内容|
### 响应体
● 200 响应数据格式：JSON
| 参数名称 | 类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| code|int32||false|Error code|
| message|string||false|Error message|
| data|object||false|Result data for certain request according API definition|
|⇥ uuid|string||false|预设任务uuid|
|⇥ type|string||false|任务类型|
|⇥ name|string||false|任务名|
|⇥ creater|string||false|创建人|
|⇥ content|string||false|预设任务内容|
|⇥ created|string||false|创建时间|
|⇥ updated|string||false|更新时间|
|⇥ updater|string||false|更新人|

##### 接口描述
> 




## 48	任务查询

> POST  /v1/m/task/query
### 请求体(Request Body)
| 参数名称 | 数据类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| name|string||false|任务名|
| creater|string||false|创建人|
| taskid|string||false|任务id|
| pageNum|int32||false|第几页|
| pageSize|int32||false|每页的数量|
### 响应体
● 200 响应数据格式：JSON
| 参数名称 | 类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| code|int32||false|Error code|
| message|string||false|Error message|
| data|object||false|Result data for certain request according API definition|
|⇥ total|int32||false|总数|
|⇥ pageNum|int32||false|第几页|
|⇥ pageSize|int32||false|每页的数量|
|⇥ pageTotal|int32||false|总共多少页|
|⇥ list|array[object]||false||
|⇥⇥ id|int32||false||
|⇥⇥ taskId|string||false||
|⇥⇥ type|string||false||
|⇥⇥ content|string||false||
|⇥⇥ name|string||false||
|⇥⇥ reqid|string||false||
|⇥⇥ parentId|string||false||
|⇥⇥ status|string||false||
|⇥⇥ created|string||false||
|⇥⇥ updated|string||false||
|⇥⇥ creater|string||false||

##### 接口描述
> 




## 49	添加主机信息

> POST  /v1/m/vm/add
### 请求体(Request Body)
| 参数名称 | 数据类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| name|string||false||
| hostname|string||false|主机hostname|
| publicIp|string||false||
| uuid|string||false||
| os|string||false||
| creater|string||false||
### 响应体
● 200 响应数据格式：JSON
| 参数名称 | 类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| code|int32||false|Error code|
| message|string||false|Error message|
| data|object||false|Result data for certain request according API definition|
|⇥ peerId|string||false||
|⇥ name|string||false||
|⇥ hostname|string||false|主机hostname|
|⇥ publicIp|string||false||
|⇥ uuid|string||false||
|⇥ os|string||false||
|⇥ creater|string||false||
|⇥ updater|string||false||

##### 接口描述
> 




## 50	删除主机信息

> POST  /v1/m/vm/delete
### 请求体(Request Body)
| 参数名称 | 数据类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| uuids|string||false||
### 响应体
● 200 响应数据格式：JSON
| 参数名称 | 类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| code|int32||false|Error code|
| message|string||false|Error message|
| data|object||false|Result data for certain request according API definition|

##### 接口描述
> 




## 51	查询主机节点

> POST  /v1/m/vm/query
### 请求体(Request Body)
| 参数名称 | 数据类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| name|string||false||
| uuid|string||false||
| hostname|string||false||
| pageNum|int32||false|第几页|
| pageSize|int32||false|每页的数量|
### 响应体
● 200 响应数据格式：JSON
| 参数名称 | 类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| code|int32||false|Error code|
| message|string||false|Error message|
| data|object||false|Result data for certain request according API definition|
|⇥ total|int32||false|总数|
|⇥ pageNum|int32||false|第几页|
|⇥ pageSize|int32||false|每页的数量|
|⇥ pageTotal|int32||false|总共多少页|
|⇥ list|array[object]||false||
|⇥⇥ id|int32||false||
|⇥⇥ uuid|string||false||
|⇥⇥ name|string||false||
|⇥⇥ hostname|string||false||
|⇥⇥ osType|string||false||
|⇥⇥ osInfo|string||false||
|⇥⇥ hosttype|string||false||
|⇥⇥ networktype|string||false||
|⇥⇥ privateIp|string||false||
|⇥⇥ publicIp|string||false||
|⇥⇥ created|string||false||
|⇥⇥ updated|string||false||
|⇥⇥ creater|string||false||
|⇥⇥ address|string||false||
|⇥⇥ peerId|string||false||

##### 接口描述
> 




## 52	更新主机信息

> POST  /v1/m/vm/update
### 请求体(Request Body)
| 参数名称 | 数据类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| name|string||false||
| uuid|string||false||
| os|string||false||
| updater|string||false||
### 响应体
● 200 响应数据格式：JSON
| 参数名称 | 类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| code|int32||false|Error code|
| message|string||false|Error message|
| data|object||false|Result data for certain request according API definition|
|⇥ peerId|string||false||
|⇥ name|string||false||
|⇥ hostname|string||false|主机hostname|
|⇥ publicIp|string||false||
|⇥ uuid|string||false||
|⇥ os|string||false||
|⇥ creater|string||false||
|⇥ updater|string||false||

##### 接口描述
> 



