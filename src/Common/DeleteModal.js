import { Button, Modal } from "antd";
import React from "react";
import usecustomStyles from "./customStyles";
import { Trash2 } from "lucide-react";

const customStyles = usecustomStyles();

export const DeleteModal = ({ show, handleClose, deleteModalFunction }) => {
    return (
        <React.Fragment>
            <Modal
                centered
                open={show}
                onCancel={handleClose}
                footer={[
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <Button type="primary" style={{ backgroundColor: customStyles.colorBgContainer, color: customStyles.colorSuccess }} onClick={handleClose}>Close</Button>
                        <Button type="primary" style={{ backgroundColor: customStyles.colorDanger }} onClick={deleteModalFunction}>Yes, Delete It!</Button>
                    </div>
                ]}>
                <div style={{marginBottom: customStyles.margin}} className="text-center">
                    <div >
                        <Trash2 style={{ color: customStyles.colorDanger, marginTop: customStyles.margin }} size={80} />
                    </div>
                    <div style={{marginTop: customStyles.marginSM}}>
                        <h4 style={{fontSize : customStyles.h4}}>Are you sure ?</h4>
                        <p className="text-muted mx-4 mb-0">Are you sure you want to remove this product ?</p>
                    </div>
                </div>
            </Modal>

        </React.Fragment>
    );
}