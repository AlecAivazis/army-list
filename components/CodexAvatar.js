// external imports
import { Image, Text } from 'react-native'
import { createFragmentContainer, graphql } from 'react-relay'

const CodexAvatar = ({ codex }) =>
    codex.avatar ? (
        <Image source={codex.avatar.url} />
    ) : (
        <Text>no avatar found</Text>
    )

export default createFragmentContainer(
    codexAvatar,
    graphql`
        fragment CodexAvatar_codex on Codex {
            avatar {
                url
            }
        }
    `
)
