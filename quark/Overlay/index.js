// external imports
import React from "react"
import { Modal, TouchableWithoutFeedback, View } from "react-native"

const Overlay = ({ toggle, children }) => (
    <Modal>
        {/* the click away */}
        <TouchableWithoutFeedback onPress={toggle}>
            <View style={{ backgroundColor: "white", flex: 1 }}>
                <View
                    style={{
                        marginLeft: "auto",
                        marginRight: "auto",
                        marginTop: 50,
                        width: 400,
                        backgroundColor: "white"
                    }}
                >
                    <TouchableWithoutFeedback>
                        <View style={{ flex: 1 }}>{children}</View>
                    </TouchableWithoutFeedback>
                </View>
            </View>
        </TouchableWithoutFeedback>
    </Modal>
)

export default Overlay
