//
// Copyright © 2023 Hardcore Engineering Inc.
//

import { type Builder } from '@hcengineering/model'

import core from '@hcengineering/core'
import serverCore from '@hcengineering/server-core'
import serverGithub from '@hcengineering/server-github'
import time from '@hcengineering/time'

export { serverGithubId } from '@hcengineering/server-github'

export function createModel (builder: Builder): void {
  builder.createDoc(serverCore.class.Trigger, core.space.Model, {
    trigger: serverGithub.trigger.OnProjectChanges,
    isAsync: true
  })

  // We should skip activity github mixin stuff.
  builder.createDoc(time.class.TodoAutomationHelper, core.space.Model, {
    onDoneTester: serverGithub.functions.TodoDoneTester
  })
}