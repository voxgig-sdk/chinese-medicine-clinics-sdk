

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { ChineseMedicineClinicsSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
loadEnvLocal(__dirname + '/../../../.env.local')


describe('AnnualAttendancesScEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CHINESE_MEDICINE_CLINICS_TEST_LIVE=TRUE.
  afterEach(liveDelay('CHINESE_MEDICINE_CLINICS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = ChineseMedicineClinicsSDK.test()
    const ent = testsdk.AnnualAttendancesSc()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CHINESE_MEDICINE_CLINICS_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'annual_attendances_sc.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"attendances","req":false,"short":"Number of attendances for the specified year","type":"`$INTEGER`","index$":0},{"active":true,"name":"clinicName","req":false,"short":"Name of the Chinese Medicine Clinic cum Training and Research Centre","type":"`$STRING`","index$":1},{"active":true,"name":"location","req":false,"short":"Location or district of the clinic","type":"`$STRING`","index$":2},{"active":true,"name":"year","req":false,"short":"Year of the attendance record","type":"`$STRING`","index$":3}],"name":"annual_attendances_sc","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{},"contract":{"id":"GET /cmctr/annual-attendances-sc.json","json":"{\"operationId\":\"getAnnualAttendancesSimplifiedChinese\",\"parameters\":[],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"description\":\"Response containing annual attendance data for Chinese Medicine Clinics cum Training and Research Centres\",\"properties\":{\"data\":{\"description\":\"Array of attendance records\",\"items\":{\"description\":\"A single attendance record for a Chinese Medicine Clinic\",\"properties\":{\"attendances\":{\"description\":\"Number of attendances for the specified year\",\"example\":15000,\"type\":\"integer\"},\"clinicName\":{\"description\":\"Name of the Chinese Medicine Clinic cum Training and Research Centre\",\"type\":\"string\"},\"location\":{\"description\":\"Location or district of the clinic\",\"type\":\"string\"},\"year\":{\"description\":\"Year of the attendance record\",\"example\":\"2023\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"metadata\":{\"description\":\"Metadata about the dataset\",\"properties\":{\"dataProvider\":{\"description\":\"Provider of the data\",\"example\":\"Hospital Authority\",\"type\":\"string\"},\"lastUpdated\":{\"description\":\"Last update timestamp of the dataset\",\"format\":\"date-time\",\"type\":\"string\"},\"updateFrequency\":{\"description\":\"Frequency of dataset updates\",\"example\":\"Annually\",\"type\":\"string\"}},\"type\":\"object\"}},\"type\":\"object\"}}},\"description\":\"Successful response with annual attendance data in Simplified Chinese\"},\"400\":{\"content\":{\"application/json\":{\"schema\":{\"description\":\"Error response object\",\"properties\":{\"error\":{\"properties\":{\"code\":{\"description\":\"Error code\",\"type\":\"string\"},\"message\":{\"description\":\"Error message describing what went wrong\",\"type\":\"string\"}},\"type\":\"object\"}},\"type\":\"object\"}}},\"description\":\"Bad request\"},\"500\":{\"content\":{\"application/json\":{\"schema\":{\"description\":\"Error response object\",\"properties\":{\"error\":{\"properties\":{\"code\":{\"description\":\"Error code\",\"type\":\"string\"},\"message\":{\"description\":\"Error message describing what went wrong\",\"type\":\"string\"}},\"type\":\"object\"}},\"type\":\"object\"}}},\"description\":\"Internal server error\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/cmctr/annual-attendances-sc.json","segments":[{"lit":"cmctr"},{"lit":"annual-attendances-sc.json"}],"select":{},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"annual_attendances_sc","name__orig":"annual_attendances_sc","Name":"AnnualAttendancesSc","name_":"annual_attendances_sc","name-":"annual-attendances-sc","NAME":"ANNUAL_ATTENDANCES_SC","index$":1}, {"active":true,"entity":"annual_attendances_sc","key$":"BasicAnnualAttendancesScFlow","kind":"basic","name":"BasicAnnualAttendancesScFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"annual_attendances_sc_ref01"}}],"index$":0}]}, 'AnnualAttendancesSc')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let annual_attendances_sc_ref01_data = Object.values(setup.data.existing.annual_attendances_sc)[0] as any

    // LIST
    const annual_attendances_sc_ref01_ent = client.AnnualAttendancesSc()
    const annual_attendances_sc_ref01_match: any = {}

    const annual_attendances_sc_ref01_list = (await annual_attendances_sc_ref01_ent.list(annual_attendances_sc_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/annual_attendances_sc/AnnualAttendancesScTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = ChineseMedicineClinicsSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['annual_attendances_sc01','annual_attendances_sc02','annual_attendances_sc03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CHINESE_MEDICINE_CLINICS_TEST_ANNUAL_ATTENDANCES_SC_ENTID': idmap,
    'CHINESE_MEDICINE_CLINICS_TEST_LIVE': 'FALSE',
    'CHINESE_MEDICINE_CLINICS_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['CHINESE_MEDICINE_CLINICS_TEST_ANNUAL_ATTENDANCES_SC_ENTID']

  const live = 'TRUE' === env.CHINESE_MEDICINE_CLINICS_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CHINESE_MEDICINE_CLINICS_TEST_ANNUAL_ATTENDANCES_SC_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new ChineseMedicineClinicsSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.CHINESE_MEDICINE_CLINICS_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
