const UTM_KEYS = [
  'cl_uid',
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_content',
  'utm_term'
] as const

export const UTM_KEYS_OBJ = UTM_KEYS.reduce(
  (acc, cur) => ({ ...acc, [cur]: cur }),
  {} as { [key in (typeof UTM_KEYS)[number]]: key }
)

export default UTM_KEYS
