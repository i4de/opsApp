import React, { useState, useRef, useEffect } from 'react';
import { queryScripts } from '@/services/scripts';
import { history } from 'umi';
import type { ScriptListItem } from './data';
import { PageContainer } from '@ant-design/pro-layout';
import { Form, Input, Button, Card, message } from 'antd';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const ScriptDetails: React.FC = (props) => {
  const [script, setScript] = useState<ScriptListItem>({});

  useEffect(() => {
    console.log(props.match.params.id);
    let id = props.match.params.id;
    queryScripts({ scriptId: id }).then((res) => {
      if (res.data.total == 0) {
        history.push({ pathname: '/404' });
        return;
      }
      setScript(() => {
        return res.data.list[0];
      });
    });
  }, []);

  return (
    <PageContainer>
      <Card bordered={false}>
        <div>
          脚本名称: <span> {script.name} </span>
        </div>
        <div>
          脚本id: <span> {script.scriptUid} </span>
        </div>
        <div>
          脚本描述: <span> {script.desc} </span>
        </div>
        <div>
          脚本类型: <span> {script.type} </span>
        </div>
        <div>
          脚本内容：
          <SyntaxHighlighter language={script.type} style={dark}>
            {script.content}
          </SyntaxHighlighter>
        </div>
        <div>
          <Button
            type="primary"
            onClick={() => {
              history.push({
                pathname: '/scripts/edit/' + script.scriptUid,
              });
            }}
          >
            编辑
          </Button>
        </div>
      </Card>
    </PageContainer>
  );
};

export default ScriptDetails;
