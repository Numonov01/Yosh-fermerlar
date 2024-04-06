import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import React, { useEffect } from "react"

const antIcon = (
    <LoadingOutlined
      style={{
        fontSize: 50,
      }}
      spin
    />
  );

const Spinners = ({ setLoading }) => {

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }, [setLoading]);

    return (
        <React.Fragment>
            <Spin indicator={antIcon} style={{display: "flex", alignSelf: "center", paddingLeft: "50%", paddingTop: "10%" }} />
        </React.Fragment>
    )
}

export default Spinners;