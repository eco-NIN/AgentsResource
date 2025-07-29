# Agent 广场企业接入指南（Agent 接入 JSON 配置规范）

✅ 接入方式概述:企业只需提供一份标准格式的 JSON 配置文件 和已部署好的 API 接口，即可接入平台。平台将根据该 JSON 文件自动生成前端表单、发送请求，并展示结果。

## 示例接口（企业已开发好）

POST https://yourdomain.com/api/v1/paper2video

	•	请求类型：multipart/form-data
	•	参数：
	•	pdf_files[]: 上传的 PDF 文件（单个或多个）
	•	options: JSON 字符串，包含业务参数如 mode、voice_type、video_duration 等
	•	返回字段：
	•	task_id: 唯一任务ID
	•	status_url: 用于轮询任务状态的接口路径
	•	状态接口返回 video_url 等

## 企业需提交的 JSON 配置示例

```json
{
  "agent_name": "论文生成视频",
  "api_endpoint": "https://yourdomain.com/api/v1/paper2video",
  "method": "POST",
  "description": "将上传的 PDF 论文自动转换为配音讲解的视频。",
  "input_schema": [
    {
      "key": "pdf_files[]",
      "label": "上传论文 PDF",
      "type": "file",
      "required": true,
      "multiple": true
    },
    {
      "key": "mode",
      "label": "生成模式",
      "type": "select",
      "required": true,
      "options": ["single", "batch"]
    },
    {
      "key": "voice_type",
      "label": "配音风格",
      "type": "select",
      "required": false,
      "options": ["female", "male"]
    },
    {
      "key": "video_duration",
      "label": "视频长度",
      "type": "select",
      "required": false,
      "options": ["short", "medium", "long"]
    },
    {
      "key": "background_choice",
      "label": "背景选择",
      "type": "select",
      "required": false,
      "options": ["default", "abstract", "solid"]
    }
  ],
  "options_payload_wrapper": "options",
  "output_type": "video",
  "output_label": "生成视频",
  "status_polling": {
    "enabled": true,
    "status_field": "status",
    "result_field": "result.download_url",
    "polling_url_field": "status_url"
  }
}
```
字段说明
> agent_name	在广场显示的智能体名称

> api_endpoint	企业已部署好的 API 接口地址

> method	HTTP 方法（目前支持 POST）

> description	前端显示的描述信息

> input_schema	定义参数结构，支持文件、选择框、文本等类型

> options_payload_wrapper	哪个字段内打包业务参数，如 options 字段

> output_type	返回类型，如 video, markdown, ppt

> status_polling	是否需要轮询，字段如何取 video_url

## 平台如何处理该配置
- 动态生成输入表单（React 前端）
- 将用户输入数据打包为 multipart/form-data
- 构造请求，向企业 API 发起请求
- 如果开启轮询，则根据 status_url 轮询获取 download_url 等返回值
- 前端自动渲染输出（如视频播放器）

## 可选：提供接口测试代码模板（Python）

```python
import requests

files = {
    'pdf_files[]': open('sample.pdf', 'rb')
}
data = {
    'options': json.dumps({
        "mode": "single",
        "voice_type": "female",
        "video_duration": "short",
        "background_choice": "default"
    })
}
```

response = requests.post("https://yourdomain.com/api/v1/paper2video", files=files, data=data)
print(response.json())


⸻

📤 6. 如何提交配置文件？

企业可通过以下任意方式提交配置：
	•	✅ 登录平台后台上传 JSON 文件
	•	✅ 发送邮件至 support@yourplatform.com
	•	✅ 通过 API 注册 Agent（可选自动化）

⸻

✅ 命名建议
	•	文档名：agent_integration_guide.md
	•	JSON模板：agent_config_template.json
	•	示例配置：paper2video_agent_config.json

⸻

如果你需要我帮你生成这几份文件（.md, .json 模板），我可以直接写出文件内容供你使用。是否继续？