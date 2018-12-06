import React from 'react'
import { List } from 'semantic-ui-react'

const FriendsList = () => (
  <List animated verticalAlign='middle'>
    <List.Item>
      {/* <Image avatar src='/images/avatar/small/helen.jpg' /> */}
      <List.Content>
        <List.Header>Helen</List.Header>
      </List.Content>
    </List.Item>
    <List.Item>
      {/* <Image avatar src='/images/avatar/small/christian.jpg' /> */}
      <List.Content>
        <List.Header>Christian</List.Header>
      </List.Content>
    </List.Item>
    <List.Item>
      {/* <Image avatar src='/images/avatar/small/daniel.jpg' /> */}
      <List.Content>
        <List.Header>Daniel</List.Header>
      </List.Content>
    </List.Item>
  </List>
)

export default FriendsList