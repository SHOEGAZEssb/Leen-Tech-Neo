| Property         | Value                                      | explanation                                                                                                           |
| ---------------- | ------------------------------------------ | --------------------------------------------------------------------------------------------------------------------- |
| `mob`            | `"minecraft:ghast"`                        | The entity ID that this rule will spawn. In this case, ghasts.                                                        |
| `persecond`      | `0.05`                                     | Probability per second that this rule fires. `0.05` = \~5% chance, so about once every 20 seconds.                    |
| `attempts`       | `2`                                        | How many random spawn positions are tried when the rule fires. More attempts = more chances per tick cycle.           |
| `amount.minimum` | `1`                                        | Minimum number of mobs spawned per successful attempt.                                                                |
| `amount.maximum` | `1`                                        | Maximum number of mobs spawned per successful attempt. Here it’s fixed to always be 1.                                |
| `dimension`      | `"minecraft:overworld"`                    | Restricts spawning to the Overworld. Required in `spawner.json`.                                                      |
| `mindist`        | `40`                                       | Minimum distance from the nearest player in blocks. Prevents spawns right on top of players.                          |
| `maxdist`        | `120`                                      | Maximum distance from the nearest player in blocks. Beyond this, spawns won’t happen.                                 |
| `minheight`      | `80`                                       | Minimum Y-level. Ensures ghasts only spawn in open air, not underground.                                              |
| `maxheight`      | `256`                                      | Maximum Y-level. Allows them to spawn anywhere in the sky up to build limit.                                          |
| `norestrictions` | `true`                                     | Bypasses vanilla spawn restrictions (e.g., ghasts being Nether-only). Without this, Overworld spawning wouldn’t work. |
| `inair`          | `true`                                     | Allows spawning in mid-air, instead of requiring solid blocks below. Important for flying mobs like ghasts.           |
| `maxthis`        | `5`                                        | Caps the number of ghasts alive from this rule at once. Prevents world flooding.                                      |
| `and.biome`      | `["minecraft:plains", "minecraft:desert"]` | Restricts spawns to specific biomes. Only plains and desert in this case.                                             |
