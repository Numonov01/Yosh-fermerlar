import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import SimpleBar from 'simplebar-react';

import classNames from 'classnames';
import { AlertOctagon, Archive, BookmarkPlus, Circle, Mail, Pencil, Plus, Send, Tags, Trash2 } from 'lucide-react';
import usecustomStyles from '../../../Common/customStyles';

import { Badge, Button } from 'antd';
import { styled } from 'styled-components';

const customStyles = usecustomStyles();

const SidebarEmail = ({ toggleTab, activeTabs, isLabelTab, menuBarRef }) => {

    const TextLight = styled.div`
      color: ${({ theme }) => theme.token.textLight};
`;

    const BgActive = styled.div`
  background-color: ${({ theme }) => theme.token.emailSidebar};
  padding:20px;
`;

    const [composeModal, setComposeModal] = useState(false);

    return (
        <React.Fragment>
            <div  id="email-menu-sidebar" ref={menuBarRef} >
                <BgActive style={{flex: "column", marginBottom: "0px" }}>
                    <div style={{ marginBottom: '12px' }}>
                        <Button type='primary' style={{ width: "100%", }} onClick={() => setComposeModal(!composeModal)}><Plus size={14} style={{ marginRight: "8px", outline:'none', boxShadow:'none'}} /> Compose</Button>
                    </div>

                    <div className="mx-n4 px-4" >
                        <div>
                            <div style={{ marginBottom: "16px", marginTop: '20px' }}>
                                <Link to="#" onClick={() => { toggleTab("all", "all", "all"); }} className={classNames({ active: activeTabs === 'all' })} style={{ display: 'flex', justifyContent: 'space-between', color: activeTabs === 'all' ? customStyles.colorPrimary : customStyles.textMuted}}>
                                    <div style={{display:'flex'}}>
                                        <Mail size={14} />
                                        <span className="mail-list-link" style={{ marginLeft: '10px', fontWeight: '400' }} >All{" "}</span>
                                    </div>
                                    <Badge count={5} style={{ color: customStyles.colorPrimary, fontSize: '11px', fontWeight: '500', backgroundColor: 'rgba(67, 142, 255, 0.10)', borderRadius: '4px' }} />
                                </Link>
                            </div>
                            <div style={{ marginBottom: "16px" }}>
                                <Link to="#" onClick={() => { toggleTab("inbox", "all", "all"); }} className={classNames({ active: activeTabs === 'inbox' })} style={{ display: 'flex', justifyContent: 'space-between', color: activeTabs === 'inbox' ? customStyles.colorPrimary : customStyles.textMuted}}>
                                    <div style={{display:'flex'}}>
                                        <Archive size={14} />
                                        <span className="mail-list-link" style={{ marginLeft: '10px', fontWeight: '400' }}>Inbox {" "}</span>
                                    </div>
                                    <Badge count={5} style={{ color: customStyles.colorPrimary, fontSize: '11px', fontWeight: '500', backgroundColor: 'rgba(67, 142, 255, 0.10)', borderRadius: '4px' }} />
                                </Link>
                            </div>
                            <div style={{ marginBottom: "16px" }}>
                                <Link to="#" onClick={() => { toggleTab("sent", "all", "all"); }} className={activeTabs === "sent" ? "active" : " "} style={{color: activeTabs === 'sent' ? customStyles.colorPrimary : customStyles.textMuted}} >
                                    <div style={{display:'flex'}}>
                                        <Send size={14} />
                                        <span className="mail-list-link" style={{ marginLeft: '10px', fontWeight: '400' }}>Sent</span>
                                    </div>
                                </Link>
                            </div>
                            <div style={{ marginBottom: "16px" }}>
                                <Link to="#" onClick={() => { toggleTab("draft", "all", "all"); }} className={activeTabs === "draft" ? "active" : " "} style={{color: activeTabs === 'draft' ? customStyles.colorPrimary : customStyles.textMuted}}>
                                    <div style={{display:'flex'}}>
                                        <Pencil size={14} />
                                        <span className="mail-list-link" style={{ marginLeft: '10px', fontWeight: '400' }}>Draft</span>
                                    </div>
                                </Link>
                            </div>
                            <div style={{ marginBottom: "16px" }}>
                                <Link to="#" onClick={() => { toggleTab("spam", "all", "all"); }} className={activeTabs === "spam" ? "active" : " "} style={{color: activeTabs === 'spam' ? customStyles.colorPrimary : customStyles.textMuted}}>
                                    <div style={{display:'flex'}}>
                                        <AlertOctagon size={14} />
                                        <span className="mail-list-link" style={{ marginLeft: '10px', fontWeight: '400' }}>Spam</span>
                                    </div>
                                </Link>
                            </div>
                            <div style={{ marginBottom: "16px" }}>
                                <Link to="#" onClick={() => { toggleTab("trash", "all", "all"); }} className={activeTabs === "trash" ? "active" : " "} style={{color: activeTabs === 'trash' ? customStyles.colorPrimary : customStyles.textMuted}}>
                                    <div style={{display:'flex'}}>
                                        <Trash2 size={14} />
                                        <span className="mail-list-link" style={{ marginLeft: '10px', fontWeight: '400' }}>Trash</span>
                                    </div>
                                </Link>
                            </div>
                            <div style={{ marginBottom: "16px" }}>
                                <Link to="#" onClick={() => { toggleTab("starred", "all", "all"); }} className={activeTabs === "starred" ? "active" : " "} style={{color: activeTabs === 'starred' ? customStyles.colorPrimary : customStyles.textMuted}}>
                                    <div style={{display:'flex'}}>
                                        <BookmarkPlus size={14} />
                                        <span className="mail-list-link" style={{ marginLeft: '10px', fontWeight: '400' }}>Starred</span>
                                    </div>
                                </Link>
                            </div>
                            <div style={{ marginBottom: "16px" }}>
                                <Link to="#" onClick={() => { toggleTab("important", "all", "all"); }} className={activeTabs === "important" ? "active" : " "} style={{color: activeTabs === 'important' ? customStyles.colorPrimary : customStyles.textMuted}}>
                                    <div style={{display:'flex'}}>
                                        <Tags size={14} />
                                        <span className="mail-list-link" style={{ marginLeft: '10px', fontWeight: '400' }}>Important</span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <SimpleBar style={{height: "41vh"}} className="simplebar-scrollable-y"  data-simplebar="init">
                        <div>
                            <TextLight style={{ paddingTop: "16px", paddingBottom: "20px", fontSize: '13px', fontWeight: '600', textTransform: 'uppercase' }}>Labels</TextLight>
                           
                            <div className="mail-list">
                                <div style={{ marginBottom: "8px" }}>
                                    <Link to="#" onClick={() => { toggleTab("all", "all", "support"); }} className={isLabelTab === "support" ? "active" : " "} style={{ display: 'flex', justifyContent: 'space-between',color: isLabelTab === 'support' ? customStyles.colorPrimary : customStyles.textMuted }}>
                                        <div style={{ display: 'flex' }}>
                                            <Circle size={13} style={{ color: customStyles.colorInfo }} />{" "}
                                            <div style={{ marginLeft: '10px', fontWeight: '400' }} className="mail-list-link" data-type="label">Support{" "}</div>
                                        </div>
                                        <div>
                                            <Badge count={3} style={{ color: customStyles.colorPrimary, fontSize: '11px', fontWeight: '500', backgroundColor: 'rgba(67, 142, 255, 0.10)', borderRadius: '4px' }} />
                                        </div>
                                    </Link>
                                </div>
                                <div style={{ marginBottom: "8px" }}>
                                    <Link to="#" onClick={() => { toggleTab("all", "all", "freelance"); }} className={isLabelTab === "freelance" ? "active" : " "} style={{color: isLabelTab === 'freelance' ? customStyles.colorPrimary : customStyles.textMuted}}>
                                        <div style={{ display: 'flex' }}>
                                            <Circle size={13} style={{ color: customStyles.colorWarning }} />{" "}
                                            <div style={{ marginLeft: '10px', fontWeight: '400' }} className="mail-list-link" data-type="label">Freelance{" "}</div>
                                        </div>
                                    </Link>
                                </div>
                                <div style={{ marginBottom: "8px" }}>
                                    <div style={{ display: 'flex' }}>
                                        <Link to="#" onClick={() => { toggleTab("all", "all", "social"); }} className={isLabelTab === "social" ? "active" : " "} style={{color: isLabelTab === 'social' ? customStyles.colorPrimary : customStyles.textMuted}}>
                                            <div style={{ display: 'flex' }}>
                                                <Circle size={13} style={{ color: customStyles.colorPrimary }} />{" "}
                                                <div style={{ marginLeft: '10px', fontWeight: '400' }} className="mail-list-link" data-type="label">Social{" "}</div></div>
                                        </Link>
                                    </div>
                                </div>
                                <div style={{ marginBottom: "8px" }}>
                                    <Link to="#" onClick={() => { toggleTab("all", "all", "friend"); }} className={isLabelTab === "friend" ? "active" : " "} style={{ display: 'flex', justifyContent: 'space-between',color: isLabelTab === 'friend' ? customStyles.colorPrimary : customStyles.textMuted }}>
                                        <div style={{ display: 'flex' }}>
                                            <Circle size={13} style={{ color: customStyles.colorSecondary }} />{" "}
                                            <div style={{ marginLeft: '10px', fontWeight: '400' }} className="mail-list-link" data-type="label">Friends{" "}</div>
                                        </div>
                                        <div>
                                            <Badge count={2} style={{ color: customStyles.colorPrimary, fontSize: '11px', fontWeight: '500', backgroundColor: 'rgba(67, 142, 255, 0.10)', borderRadius: '4px' }} />
                                        </div>
                                    </Link>
                                </div>
                                <div style={{ marginBottom: "10px" }}>
                                    <Link to="#" onClick={() => { toggleTab("all", "all", "family"); }} className={isLabelTab === "family" ? "active" : " "} style={{color: isLabelTab === 'family' ? customStyles.colorPrimary : customStyles.textMuted}}>
                                        <div style={{ display: 'flex' }}>
                                            <Circle size={13} style={{ color: customStyles.colorSuccess }} />{" "}
                                            <div style={{ marginLeft: '10px', fontWeight: '400' }} className="mail-list-link" data-type="label">Family{" "}</div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                           
                        </div>

                        </SimpleBar>
                    </div>
                </BgActive>
            </div>
        </React.Fragment>
    )
}

export default SidebarEmail