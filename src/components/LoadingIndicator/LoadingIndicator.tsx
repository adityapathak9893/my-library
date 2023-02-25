import React, { FC } from "react";
import { Alert, Space, Spin } from "antd";

export const LoadingIndicator: FC = () => {
  return (
    <Space direction="vertical" style={{ width: "100%" }}>
      <Spin tip="Loading...">
        <Alert
          message="Loading"
          description="Relevent search results are being fetched"
          type="info"
        />
      </Spin>
    </Space>
  );
};
