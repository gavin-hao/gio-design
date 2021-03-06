import React from 'react';
import { Table } from '@gio-design/components';
import '@gio-design/components/es/components/table/style/index.css';

const dataSource = [
  {
    key: '1',
    first: '列表文本',
    second: '列表文本',
    third: '列表文本',
  },
  {
    key: '2',
    first: '列表文本',
    second: '列表文本',
    third: '列表文本',
  },
];

const columns: any[] = [
  {
    title: '列标题',
    dataIndex: 'first',
    align: 'left',
    sorter: (a, b) => a.first - b.first,
  },
  {
    title: '列标题',
    dataIndex: 'second',
    align: 'left',
    sorter: (a, b) => a.second - b.second,
  },
  {
    title: '列标题',
    dataIndex: 'third',
    align: 'left',
    sorter: (a, b) => a.third - b.third,
  },
];

export default () => <Table title="排序" dataSource={dataSource} columns={columns} pagination={false} />;
