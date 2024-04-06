import { Button, Form, Input, Modal, Select } from 'antd'
import React, { useEffect, useState } from 'react'
import usecustomStyles from '../../../Common/customStyles';
import dummy from "../../../assets/images/users/user-dummy-img.jpg"
import { Camera } from 'lucide-react';

const customStyles = usecustomStyles();

const ContactModal = ({ modalShow, toggle, contact, onUpdateContact, onAddNewContact, isEdit, dispatch }) => {
    const [form] = Form.useForm();

    const [imgSrc, setImgSrc] = useState();

    useEffect(() => {
        if (contact) {
            form.setFieldsValue({
                id: contact.id || '',
                name: contact.name || '',
                img: contact?.img || '',
                email: contact.email || '',
                phone: contact.phone || '',
                country: contact.country || '',
                label: contact.label || '',
            });
        }
    }, [contact, form]);

    const handleSubmit = (values) => {
        if (isEdit) {
            const updateContact = {
                id: contact ? contact.id : 0,
                name: values.name,
                img: values.img || imgSrc,
                email: values.email,
                phone: values.phone,
                country: values.country || '',
                label: values.label || ''
            };
            // update contact
            dispatch(onUpdateContact(updateContact));
        } else {
            const newContact = {
                id: (Math.floor(Math.random() * (30 - 20)) + 20),
                name: values["name"],
                img: values["img"] || imgSrc,
                email: values["email"],
                phone: values["phone"],
                country: values["country"],
                label: values["label"]
            };
            // save new contact
            dispatch(onAddNewContact(newContact));
        }
        form.resetFields();
        toggle();
        setImgSrc('')
    }

    useEffect(() => {
        setImgSrc(contact?.img);
    }, [contact])

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = (e) => {
            form.setFieldValue('img', e.target.result);
            setImgSrc(e.target.result);
        };
        reader.readAsDataURL(file);
    };


    return (
        <React.Fragment>
            <Modal
                centered
                open={modalShow}
                title={!!isEdit ? "Edit Contact" : "Add Contact"}
                onCancel={() => toggle()}
                footer={[]}
            >
                <div>
                    <Form form={form} onFinish={handleSubmit}>
                        <div className="text-center">
                            <Form.Item name="img" >
                                <div style={{ position: "relative", display: "inline-block" }}>
                                
                                    <div>
                                        <Input
                                            type="file"
                                            accept="image/png, image/gif, image/jpeg"
                                            id="customer-image-input"
                                            style={{ display: 'none' }}
                                            onChange={handleImageChange}
                                        />
                                        <label
                                            className="mb-0 form-label"
                                            htmlFor="customer-image-input"
                                            data-bs-toggle="tooltip"
                                            data-bs-placement="right"
                                            title="Select Image"
                                        >
                                            <div className="avatar-xs cursor-pointer">
                                                <div className="avatar-title" style={{position: "absolute", bottom: "0px", right: "5px", color: customStyles.textMuted, padding: "5px 5px 0px 5px", backgroundColor: customStyles.colorBgContainer,borderRadius: '50%'}}>
                                                    <Camera size={18} />
                                                </div>
                                            </div>
                                        </label>

                                        <div>
                                            <div className="avatar-title rounded-circle">
                                                <img src={imgSrc || dummy} alt="" style={{ height: '96px', width: '96px', borderRadius: '50%', border: "5px solid", borderColor: "#EEF0F7" }} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Form.Item>
                        </div>

                        <div>

                            <div className='name'>
                                <label style={{ marginBottom: '10px', display: 'block', fontWeight: 500 }} > Name </label>
                                <Form.Item name="name" rules={[{ required: true, message: 'Name is required' }]}>
                                    <Input name="name" type="text" />
                                </Form.Item>
                            </div>


                            <div className='email' style={{ marginTop: customStyles.marginSM }}>
                                <label style={{ marginBottom: '10px', display: 'block', fontWeight: 500 }} htmlFor="email"  > Email </label>
                                <Form.Item name="email" rules={[{ required: true, message: 'Email is required' }]}>
                                    <Input name="email" type="email" />
                                </Form.Item>
                            </div>

                            <div className='phone' style={{ marginTop: customStyles.marginSM }}>
                                <label style={{ marginBottom: '10px', display: 'block', fontWeight: 500 }} htmlFor="phoneNumber"  > Phone </label>
                                <Form.Item name="phone" rules={[{ required: true, message: 'Phone is required' }]}>
                                    <Input name="phone" type="tel"
                                        pattern="+([0-9]{3}) [0-9]{2} [0-9]{3} [0-9]{4}"
                                    />
                                </Form.Item>
                            </div>

                            <div style={{ marginTop: customStyles.marginSM }}>
                                <label style={{ marginBottom: '10px', display: 'block', fontWeight: 500 }} htmlFor="country" >Country</label>
                                <Form.Item name="country" rules={[{ required: true, message: 'Country is required' }]}>
                                    <Select
                                        name="country"
                                        style={{ width: "100%", padding: "8px" }}
                                    >
                                        <Select.Option value="all">Angola</Select.Option>
                                        <Select.Option value="Germany">Germany</Select.Option>
                                        <Select.Option value="Belgium">Belgium</Select.Option>
                                        <Select.Option value="Brazil">Brazil</Select.Option>
                                        <Select.Option value="Jersey">Jersey</Select.Option>
                                        <Select.Option value="Namibia">Namibia</Select.Option>
                                        <Select.Option value="Spain">Spain</Select.Option>
                                        <Select.Option value="USA">USA</Select.Option>
                                        <Select.Option value="Ukraine">Ukraine</Select.Option>
                                    </Select>
                                </Form.Item>
                            </div>

                            <div style={{ marginTop: customStyles.marginSM }}>
                                <label style={{ marginBottom: '10px', display: 'block', fontWeight: 500 }} htmlFor="label">Label</label>
                                <Form.Item name="label" rules={[{ required: true, message: 'Label is required' }]}>
                                    <Select
                                        name="label"
                                        style={{ width: "100%", marginBottom: customStyles.marginXS, padding: "8px" }}
                                    >
                                        <Select.Option value="all">Family</Select.Option>
                                        <Select.Option value="Friends">Friends</Select.Option>
                                        <Select.Option value="Business">Business</Select.Option>
                                        <Select.Option value="Imported">Imported</Select.Option>
                                    </Select>
                                </Form.Item>
                            </div>

                        </div>
                        <div style={{ textAlign: 'end' }}>
                            <Button htmlType="submit" type='primary'>{!!isEdit ? "Save" : "Add Contact"}</Button>
                        </div>
                    </Form>
                </div>

            </Modal>
        </React.Fragment>
    )
}

export default ContactModal