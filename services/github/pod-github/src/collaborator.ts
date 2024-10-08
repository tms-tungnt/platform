//
// Copyright © 2024 Hardcore Engineering Inc.
//
//

import { CollaboratorClient, getClient as getCollaboratorClient } from '@hcengineering/collaborator-client'
import { Hierarchy, WorkspaceId } from '@hcengineering/core'
import { generateToken } from '@hcengineering/server-token'
import config from './config'

/**
 * @public
 */
export function createCollaboratorClient (hierarchy: Hierarchy, workspaceId: WorkspaceId): CollaboratorClient {
  const token = generateToken(config.SystemEmail, workspaceId, { mode: 'github' })
  return getCollaboratorClient(hierarchy, workspaceId, token, config.CollaboratorURL)
}
