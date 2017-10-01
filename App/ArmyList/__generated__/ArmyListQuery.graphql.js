/**
 * @flow
 * @relayHash 06e49142ba29f0a1c89f4ac5b1909884
 */

/* eslint-disable */

"use strict"

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type ArmyListQueryResponse = {|
  +viewer: {|
    +allArmies: {| |};
  |};
|};
*/

/*
query ArmyListQuery {
  viewer {
    allArmies {
      ...ArmyList_armies
    }
    id
  }
}

fragment ArmyList_armies on ArmyConnection {
  edges {
    node {
      ...ArmyCard_army
      name
      id
    }
  }
}

fragment ArmyCard_army on Army {
  id
  name
}
*/

const batch /*: ConcreteBatch*/ = {
    fragment: {
        argumentDefinitions: [],
        kind: "Fragment",
        metadata: null,
        name: "ArmyListQuery",
        selections: [
            {
                kind: "LinkedField",
                alias: null,
                args: null,
                concreteType: "Viewer",
                name: "viewer",
                plural: false,
                selections: [
                    {
                        kind: "LinkedField",
                        alias: null,
                        args: null,
                        concreteType: "ArmyConnection",
                        name: "allArmies",
                        plural: false,
                        selections: [
                            {
                                kind: "FragmentSpread",
                                name: "ArmyList_armies",
                                args: null
                            }
                        ],
                        storageKey: null
                    }
                ],
                storageKey: null
            }
        ],
        type: "Query"
    },
    id: null,
    kind: "Batch",
    metadata: {},
    name: "ArmyListQuery",
    query: {
        argumentDefinitions: [],
        kind: "Root",
        name: "ArmyListQuery",
        operation: "query",
        selections: [
            {
                kind: "LinkedField",
                alias: null,
                args: null,
                concreteType: "Viewer",
                name: "viewer",
                plural: false,
                selections: [
                    {
                        kind: "LinkedField",
                        alias: null,
                        args: null,
                        concreteType: "ArmyConnection",
                        name: "allArmies",
                        plural: false,
                        selections: [
                            {
                                kind: "InlineFragment",
                                type: "ArmyConnection",
                                selections: [
                                    {
                                        kind: "LinkedField",
                                        alias: null,
                                        args: null,
                                        concreteType: "ArmyEdge",
                                        name: "edges",
                                        plural: true,
                                        selections: [
                                            {
                                                kind: "LinkedField",
                                                alias: null,
                                                args: null,
                                                concreteType: "Army",
                                                name: "node",
                                                plural: false,
                                                selections: [
                                                    {
                                                        kind: "ScalarField",
                                                        alias: null,
                                                        args: null,
                                                        name: "name",
                                                        storageKey: null
                                                    },
                                                    {
                                                        kind: "ScalarField",
                                                        alias: null,
                                                        args: null,
                                                        name: "id",
                                                        storageKey: null
                                                    }
                                                ],
                                                storageKey: null
                                            }
                                        ],
                                        storageKey: null
                                    }
                                ]
                            }
                        ],
                        storageKey: null
                    },
                    {
                        kind: "ScalarField",
                        alias: null,
                        args: null,
                        name: "id",
                        storageKey: null
                    }
                ],
                storageKey: null
            }
        ]
    },
    text:
        "query ArmyListQuery {\n  viewer {\n    allArmies {\n      ...ArmyList_armies\n    }\n    id\n  }\n}\n\nfragment ArmyList_armies on ArmyConnection {\n  edges {\n    node {\n      ...ArmyCard_army\n      name\n      id\n    }\n  }\n}\n\nfragment ArmyCard_army on Army {\n  id\n  name\n}\n"
}

module.exports = batch
